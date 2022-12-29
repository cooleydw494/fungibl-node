import { config } from 'dotenv';
import * as backend from './index.main.mjs';
import express from 'express';
import { loadStdlib } from '@reach-sh/stdlib';
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
const stdlib = loadStdlib(process.env);
config();
const fungiblSeed = process.env.SEED;
const actualBearerToken = process.env.BEARER_TOKEN;

stdlib.setProviderByName('TestNet'); // Default AlgoNode TestNet

app.post('/create-contract', checkBearerToken, async (req, res) => {
    console.log('Submitter Address Log', req.body.submitter_address);
    const contractInfo = await CreateContractForSubmission(req.body.nft_asset_id, req.body.submitter_address)
    res.json({ success: 'Buyer set in contract', ctc_info: contractInfo, })
})

app.post('/verify-nft-submitted', checkBearerToken, async (req, res) => {
    const nftSubmitted = await VerifyNftIsSubmitted(req.body.contract_info, req.body.nft_asset_id, req.body.submitter_address)
    res.json({ success: 'Verification complete', nft_is_submitted: nftSubmitted })
})

app.post('/set-puller', checkBearerToken, async (req, res) => {
    const pullerSet = await SetPullerToContract(req.body.contract_info, req.body.seller_address)
    res.json({ puller_set: pullerSet, })
})

app.listen(3000, () => {
    console.log('Fungibl API server listening on port 3000')
})

let CreateContractForSubmission = async (nftAssetId, submitterAddress) => {
    const FungiblAccount = await stdlib.newAccountFromMnemonic(fungiblSeed)
    console.log(FungiblAccount);
    const contract = FungiblAccount.contract(backend)
    const fungiblAddress = stdlib.formatAddress(FungiblAccount)
    console.log(fungiblAddress);
    submitterAddress = stdlib.formatAddress(submitterAddress)
    const creationInfo = {
        fungiblAddress: fungiblAddress,
        nftAssetId: nftAssetId,
        funToken: process.env.FUN_ASA_ID,
        submitterAddress: submitterAddress,
    }
    await backend.Deployer(contract, creationInfo)
    return await contract.getInfo()
}

let VerifyNftIsSubmitted = async (contractInfo, nftAssetId, submitterAddress) => {
    return new Promise(async (resolve) => {
        try {
            console.log(`verifying NFT ${nftAssetId} is submitted by ${submitterAddress}`)

            const ctcInfo = JSON.parse(contractInfo)
            const FungiblAccount = await stdlib.newAccountFromMnemonic(fungiblSeed)
            const ctc = FungiblAccount.contract(backend, ctcInfo)
            const call = async (f) => {
                let res = undefined
                try {
                    res = await f()
                } catch (e) {
                    res = [`err`, e]
                    if (res !== null) {
                        console.log("Failed to bind puller to contract..", e)
                        resolve(false)
                    }
                }
                console.log(`res`, res)
            }

            try {
                const Oracle = ctc.a.Oracle
                await call(() => Oracle.verifyNftSubmitted(stdlib.formatAddress(submitterAddress)))

                console.log(`NFT submission verified...`)
                resolve(true)
            } catch (e) {
                console.log("Failed to verify NFT submission..", e)
                resolve(false)
            }
        } catch (e) {
            console.log("Failed to bind puller to contract..", e)
            resolve(false)
        }
    })
}

let SetPullerToContract = async (ctcInfoStr, puller) => {
    return new Promise(async (resolve) => {
        try {
            console.log("setting puller.....")

            const ctcInfo = JSON.parse(ctcInfoStr)
            const FungiblAccount = await stdlib.newAccountFromMnemonic(fungiblSeed)
            const ctc = FungiblAccount.contract(backend, ctcInfo)
            const call = async (f) => {
                let res = undefined
                try {
                    res = await f()
                } catch (e) {
                    res = [`err`, e]
                    if (res !== null) {
                        console.log("Failed to bind puller to contract..", e)
                        resolve(false)
                    }
                }
                console.log(`res`, res)
            }

            try {
                const Oracle = ctc.a.Oracle
                await call(() => Oracle.setPullDetails(stdlib.formatAddress(puller), 0, 0, 1000))

                console.log(`puller ${puller} specified for contract ${ctcInfoStr}...`)
                resolve(true)
            } catch (e) {
                console.log("Failed to bind puller to contract..", e)
                resolve(false)
            }
        } catch (e) {
            console.log("Failed to bind puller to contract..", e)
            resolve(false)
        }
    })
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
