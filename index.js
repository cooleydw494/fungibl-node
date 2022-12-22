require('dotenv').config()
import * as backend from "./index.main.mjs"
const express = require('express');
const reach = require('@reach-sh/stdlib');
const app = express();
const actualBearerToken = process.env.BEARER_TOKEN;
const fungiblSeed = process.env.SEED;
const stdlib = reach.loadStdlib();

app.get('/create-contract', checkBearerToken, async (req, res) => {
    const contractInfo = await CreateContractForSubmission(req.nft_asset_id, req.submitter_address);
    res.json({ success: 'Buyer set in contract', ctc_info: contractInfo, });
});

app.get('/verify-nft-submitted', checkBearerToken, async (req, res) => {
    const nftSubmitted = await VerifyNftIsSubmitted(req.contract_info, req.nft_asset_id, req.submitter_address);
    res.json({ success: 'Verification complete', nft_is_submitted: nftSubmitted });
});

app.get('/set-buyer', checkBearerToken, async (req, res) => {
    const success = await SetBuyerToContract();
    res.json({ success: 'Buyer set in contract', });
});

app.listen(3000, () => {
    console.log('Fungibl API server listening on port 3000');
});

let CreateContractForSubmission = async (nftAssetId, submitterAddress) => {
            const FungiblAccount = await stdlib.newAccountFromMnemonic(fungiblSeed);
            const contract = FungiblAccount.contract(backend);
            const fungiblAddress = stdlib.formatAddress(FungiblAccount);
            submitterAddress = stdlib.formatAddress(submitterAddress);
            const creationInfo = {
                fungiblAddress: fungiblAddress,
                nftAssetId: nftAssetId,
                funToken: process.env.FUN_ASA_ID,
                submitterAddress: submitterAddress,
            };
            backend.Fungibl(this.ctc, creationInfo);
            return await contract.getInfo();
}

let VerifyNftIsSubmitted = async (contractInfo, nftAssetId, submitterAddress) => {

}

let SetBuyerToContract = async (ctcInfoStr, buyer) => {
    return new Promise(async (resolve) => {
        try {
            console.log("setting buyer.....");

            const ctcInfo = JSON.parse(ctcInfoStr);
            const FungiblAccount = await stdlib.newAccountFromMnemonic(fungiblSeed);
            const ctc = FungiblAccount.contract(backend, ctcInfo);
            const call = async (f) => {
                let res = undefined;
                try {
                    res = await f();
                } catch (e) {
                    res = [`err`, e];
                    if (res !== null) {
                        console.log("Failed to bind buyer to contract..", e);
                        resolve(false);
                    }
                }
                console.log(`res`, res);
            };

            try {
                const Fungibl = ctc.a.Fungibl;
                await call(() => Fungibl.setBuyer(stdlib.formatAddress(buyer)));

                console.log(`buyer ${buyer} specified for contract ${ctcInfoStr}...`);
                resolve(true);
            } catch (e) {
                console.log("Failed to bind buyer to contract..", e);
                resolve(false);
            }
        } catch (e) {
            console.log("Failed to bind buyer to contract..", e);
            resolve(false);
        }
    });
}

function checkBearerToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerTokenType = bearer[0];
        if (bearerTokenType === 'Bearer') {
            const bearerToken = bearer[1];
            if (bearerToken === actualBearerToken) {
                return next();
            } else {
                return res.status(401).send({
                    error: 'Token not recognized.'
                });
            }
        }
        return res.status(401).send({
            error: 'Invalid authentication type. Expected "Bearer".'
        });
    }
    return res.status(401).send({
        error: 'Missing authentication header.'
    });
}
