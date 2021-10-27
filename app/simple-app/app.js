const express = require('express');
const app = express();

app.get('/', (req, res) => {
    try {
        res.status(200).sendFile('views/front.html', {root: __dirname })

    } catch (err) {
        console.log('ERROR: ', err);
    }
});

app.get('/healthcheck', (req, res) => {
    try {
        res.status(200).sendFile('views/index.html', {root: __dirname })
    } catch (err) {
        console.log('ERROR: ', err);
    }
});

module.exports = app;