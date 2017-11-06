
var Word = require('./word.js');

var words = ['cat', 'dog', 'alligator', 'mouse', 'cow'];
var WordMaker = function() {
    this.guessesLeft = 10;
    this.lettersguessed = [];

    this.startNewGame = function () {
        this.guessesLeft = 10;
        this.lettersGuessed = [];
        this.word = this.randomWord();  
    };

    this.randomWord = function () {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        return new Word(randomWord);
    };

    this.printResults = function (str) {


        switch (str) {
            case "already guessed":
                console.log('already guessed');
                break;
            case "correct":
                console.log('Nice');
                console.log('number of guesses left: ' + this.guessesLeft);
                console.log('Letters already guessed: ' + this.lettersGuessed);
                break;
            case "wrong":
                console.log('incorrect');
                console.log('number of guesses left: ' + this.guessesLeft);
                console.log('Letters already guessed: ' + this.lettersGuessed);
                break;
           
            default:
                console.log('error');
        }

    };

    this.endGame = function () {
        console.log('thanks for playing');
    }

}

module.exports = WordMaker;