require('dotenv').config()
const express = require('express');
const app = express();
const actualBearerToken = process.env.BEARER_TOKEN;

app.get('/do-thing', checkBearerToken, (req, res) => {

    res.json({ message: 'Hello, World!' });
});

app.listen(3000, () => {
    console.log('Fungibl API server listening on port 3000');
});

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
