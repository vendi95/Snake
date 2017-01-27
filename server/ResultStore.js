'use strict'

const Result = require('./Result')
const fs = require("fs");

class ResultStore {
    constructor() {
        this.results = require("./results.json");
    }

    addResult(result) {
        this.results.push(new Result(result))
        this.results.sort(Result.compare)
        this.results = this.results.slice(0, 10)
        fs.writeFile( "results.json", JSON.stringify( this.results ), "utf8");
    }

    getToplist() {
        return this.results
    }
}

module.exports = ResultStore
