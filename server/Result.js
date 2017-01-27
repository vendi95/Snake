'use strict'

class Result {
    constructor({
        username = this.invalidResult(),
        date = this.invalidResult(),
        level = this.invalidResult(),
        score = this.invalidResult(),
    }) {
        this.username = username
        this.date = date
        this.score = score
        this.level = level
    }
    
    static compare(a, b){
      if(a.score != b.score){
        return b.score - a.score;
      }
      if(a.date != b.date){
        return a.date - b.date;
      }
      return 0;
    }

    invalidResult() {
        throw 'Invalid result!'
    }
}

module.exports = Result
