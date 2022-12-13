require('dotenv').config()
const express = require('express');
const reach = require('@reach-sh/stdlib');
const app = express();
const actualBearerToken = process.env.BEARER_TOKEN;

app.get('/do-thing', checkBearerToken, (req, res) => {

    res.json({ message: 'Hello, World!' });
});

app.listen(3000, () => {
    console.log('Fungibl API server listening on port 3000');
});

let SpecifyBuyerToContract = async (ctcInfoStr, buyer) => {
    return new Promise(async (resolve) => {
        try {
            console.log("setting buyer.....");

            const ctcInfo = JSON.parse(ctcInfoStr);

            const ctc = CreatorAccount.contract(backend, ctcInfo);
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
                const Creator = ctc.a.Creator;
                await call(() => Creator.setBuyer(reach.formatAddress(buyer)));

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
