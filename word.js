var Letter = require('./letter.js');


var Word = function (randomWord) {
    this.randomWord = randomWord;
    this.randomSplitWord = randomWord.toLowerCase().split('');

    this.guessedWord = function () {

        var answerArray = [];

        for (var i = 0; i < this.randomWord.length; i++) {

            if (this.randomWord[i]) {
                answerArray.push(new Letter(this.randomWord[i].toLowerCase()));
            } else {
                answerArray.push(this.randomWord[i])
            }

        }

        return answerArray;
    };
    this.displayWord = this.guessedWord();

    this.checkGuess = function (letter) {

        var isCorrect = false;

        for (var index in this.randomSplitWord) {
            if (letter.toLowerCase() === this.randomSplitWord[index]) {
                this.displayWord[index].guessed = true;
                isCorrect = true;
            }
        }

        return isCorrect;
    };

    this.getRandomWord = function () {
        return this.randomSplitWord.join('');
    };

    this.guessedWord = function () {
        var display = '';

        for (var index in this.displayWord) {
            if (this.displayWord[index]) {
                display += this.displayWord[index].getLetter();
            } else {
                display += this.displayWord[index];
            }
        }
        return display;
    }

}

module.exports = Word;
