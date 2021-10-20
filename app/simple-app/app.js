const express = require('express');
const app = express();
// Outline a json response with the env variables
function buildResponse() {
    return {
        myapplication: [
            {
            version: process.env.VERSION || 'VERSION_not_found',
            description: 'pre-interview technical test',
            lastcommitsha: process.env.LAST_COMMIT || 'LAST_COMMIT_not_found'
            }
        ]
    };
}

app.get('/', (req, res) => {
    try {
        res.status(200).send({
            message: 'Technical Challenge, please see /healthcheck for application information'
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