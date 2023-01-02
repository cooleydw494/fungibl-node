import { config } from 'dotenv'
import * as backend from './index.main.mjs'
import express from 'express'
import { loadStdlib } from '@reach-sh/stdlib'
import bodyParser from "body-parser"
const app = express()
app.use(bodyParser.json())
const stdlib = loadStdlib(process.env)
config()
const fungiblSeed = process.env.SEED
const actualBearerToken = process.env.BEARER_TOKEN

stdlib.setProviderByName('TestNet') // Default AlgoNode TestNet

app.post('/create-contract', checkBearerToken, async (req, res) => {
    // console.log('Submitter Address Log', req.body.submitter_address)
    const contractInfo = await CreateContractForSubmission(req.body.nft_asset_id, req.body.submitter_address)
    // console.log('Contract Info Log', contractInfo)
    res.json({ success: 'Buyer set in contract', ctc_info: contractInfo, })
})

app.post('/verify-nft-submitted', checkBearerToken, async (req, res) => {
    const nftSubmitted = await VerifyNftIsSubmitted(req.body.contract_info, req.body.nft_asset_id, req.body.submitter_address)
    res.json({ success: 'Verification complete', nft_is_submitted: nftSubmitted })
})

app.post('/set-puller', checkBearerToken, async (req, res) => {
    console.log(req.body.puller_address)
    console.log(req.body)
    const pullerSet = await SetPullerToContract(req.body.contract_info, req.body.puller_address)
    res.json({ puller_set: pullerSet, })
})

app.listen(3000, () => {
    console.log('Fungibl API server listening on port 3000')
})

let CreateContractForSubmission = async (nftAssetId, submitterAddress) => {
    // console.log('now')
    const FungiblAccount = await stdlib.newAccountFromMnemonic(fungiblSeed)
    // console.log('and now')
    const fungiblAddress = stdlib.formatAddress(FungiblAccount)
    submitterAddress = stdlib.formatAddress(submitterAddress)
    const creationInfo = {
        fungiblAddress: fungiblAddress,
        nftAssetId: nftAssetId,
        funToken: process.env.FUN_ASA_ID,
        submitterAddress: submitterAddress,
        // ...stdlib.hasConsoleLogger,
    }
    // console.log('and and now')
    const contract = await FungiblAccount.contract(backend)
    // console.log('and and and now')
    backend.Deployer(contract, creationInfo)
    // console.log('and and and and now')
    return await contract.getInfo()
}

let VerifyNftIsSubmitted = async (contractInfo, nftAssetId, submitterAddress) => {
    try {
        console.log(`verifying NFT ${nftAssetId} is submitted by ${submitterAddress}`)
        const ctcInfo = JSON.parse(contractInfo)
        const FungiblAccount = await stdlib.newAccountFromMnemonic(fungiblSeed)
        const ctc = FungiblAccount.contract(backend, ctcInfo)
        try {
            const Oracle = ctc.a.Oracle
            const res = await Oracle.verifyNftSubmitted()
            console.log(`NFT submission verified...`, res)
            return true
        } catch (e) {
            console.log("Failed to verify NFT submission..", e)
        }
    } catch (e) {
        console.log("Failed to verify NFT submission..", e)
    }
    return false
}

let SetPullerToContract = async (ctcInfoStr, puller) => {
    try {
        console.log(`setting puller (${puller})`)
        const ctcInfo = JSON.parse(ctcInfoStr)
        const FungiblAccount = await stdlib.newAccountFromMnemonic(fungiblSeed)
        const contract = FungiblAccount.contract(backend, ctcInfo)
        const pullerAddress = stdlib.formatAddress(puller)
        try {
            const Oracle = contract.a.Oracle
            const res = await Oracle.setPullDetails(pullerAddress, 0, 0, 1000)
            console.log(`puller ${puller} specified for contract ${ctcInfoStr}...`, res)
            return true
        } catch (e) {
            console.log("Failed to bind puller to contract..", e)
        }
    } catch (e) {
        console.log("Failed to bind puller to contract..", e)
    }
    return false
}

function checkBearerToken(req, res, next) {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerTokenType = bearer[0]
        if (bearerTokenType === 'Bearer') {
            const bearerToken = bearer[1]
            if (bearerToken === actualBearerToken) {
                return next()
            } else {
                return res.status(401).send({
                    error: 'Token not recognized.'
                })
            }
        }
        return res.status(401).send({
            error: 'Invalid authentication type. Expected "Bearer".'
        })
    }
    return res.status(401).send({
        error: 'Missing authentication header.'
    })
}
