var inquirer = require('inquirer');
var WordMaker = require('./WordMaker.js');
var wordMaker = new WordMaker();


function start() {
    wordMaker.startNewGame();
    promptPlayer();
}


function promptPlayer() {
    console.log(wordMaker.word.guessedWord());

    inquirer.prompt([
        {
            type: 'text',
            name: 'Guess',
            message: 'Please pick a letter ',
           
        }
    ]).then(function (answer) {

        var Guess = answer.Guess.toLowerCase();

        if (wordMaker.lettersGuessed.indexOf(Guess) === -1) {

            wordMaker.lettersGuessed.push(Guess);

            var correct = wordMaker.word.checkGuess(Guess);

            if (correct) {
                wordMaker.printResults("correct");
            } else {
                wordMaker.guessesLeft--;
                wordMaker.printResults("wrong");
            }

        } else {
            wordMaker.printResults("already guessed");
            promptPlayer();
        }

        var playerWon = wordMaker.word.guessedWord() === wordMaker.word.randomWord;


        if (playerWon) {
            results('you win');
        } else if (wordMaker.guessesLeft > 0) {
            promptPlayer();
        } else {
           results('you lose');
        }

    });
}

function results(str) {
    if (str === 'you win') {
        console.log("YOU WIN!");
    } else if (str === "you lose") {
        console.log("SORRY! YOU LOST");
        console.log("The Correct Answer Was: " + wordMaker.word.randomWord);
    }

    inquirer.prompt([
        {
            type: 'list',
            name: 'response',
            message: 'play again?',
            choices: ['yes', 'no']
        }
    ]).then(function (choice) {
        if (choice.response == 'yes') {
            start();
        } else if (choice.response == 'no') {
            wordMaker.endGame();
        }
    });

}
start();

