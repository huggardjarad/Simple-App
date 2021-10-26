const express = require('express');
const app = express();
// Outline a json response with the env variables
function buildResponse() {
    return {
        myapplication: [
            {
            version: process.env.VERSION || 'Third New Development Version',
            description: 'This is the third newest development environment application',
            lastcommitsha: process.env.LAST_COMMIT || 'NEW DEV'
            }
        ]
    };
}

app.get('/', (req, res) => {
    try {
        res.status(200).send({
            message: 'This is the 3rd Development!'
        });
    } catch (err) {
        console.log('ERROR: ', err);
    }
});

app.get('/healthcheck', (req, res) => {
    try {
        res.status(200).send(buildResponse());
    } catch (err) {
        console.log('ERROR: ', err);
    }
});

module.exports = app;