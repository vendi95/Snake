'use strict'

const express = require('express')
const bodyParser = require('body-parser').json()

const ResultStore = require('./ResultStore.js')

const PORT = process.env.PORT || 3000

const app = express()

const resultStore = new ResultStore()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser)

app.post('/addResult', (req, res) => {
    try {
        console.log("Add result:", req.body);
        resultStore.addResult(req.body)
        res.status(200).json("ok")
    } catch(e) {

    }
})

app.get('/toplist', (req, res) => {
    try {
        res.status(200).json(resultStore.getToplist())
    } catch(e) {

    }
})

app.listen(PORT, function() {
    console.log('Server started: http://localhost:' + PORT + '/');
});