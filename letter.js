 var Letter = function(letter) {
    this.letter = letter;
    this.emptyLetter = "_";
    this.guessed = false;

    this.getLetter = function() {
        var lett = ' ';
        if (this.guessed) {
            lett = this.letter;
        } else {
            lett = this.emptyLetter
        }
        return lett;
    }    
}

module.exports = Letter;