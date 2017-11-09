var Word = require("./word.js");

var prompt = require("prompt");

console.log("Lets Play Some Hangman!!");
console.log("Try to guess my favorite TV Character, Movie, TV Show or Band!");
console.log("Good Luck....;)");
console.log("==================================================================");
prompt.start();

game = {

    wordBank: ["Sterling Archer", "Step Brothers", "Rick and Morty", "Guns n Roses"],
    wordsGuessed: 0,
    guessesLeft: 10,
    currentWord: null,

    startGame: function (wrd) {

        this.resetGuesses();
        this.currentWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
        this.currentWord.getLetter();
        this.promptUser();

    },

    resetGuesses: function () {

        this.guessesLeft = 10;

    },

    promptUser: function () {

        var user = this;
        prompt.get([guessLetter], function (err, result) {

            if (err) throw err;

            console.log("You guessed: " + result.guessLetter);

            var manyGuessed = user.currentWord.checkLetter(result.guessLetter);

            if (manyGuessed == 0) {

                console.log("Wrong!");
                user.guessesLeft--;

            } else {

                console.log("Correct!");
                if (user.currentWord.findWord()) {

                    console.log("You Won!");
                    console.log("==================================================================");
                    return;

                }

            }

            console.log("Guesses Remaining: " + user.guessesLeft);
            console.log("==================================================================");

            if ((user.guessesLeft > 0) && (user.currentWord.found == false)) {

                user.promptUser();

            }

            else if (user.guessesLeft == 0) {

                console.log("Game Over. Correct word was " + user.currentWord.target);

            } else {

                console.log(user.currentWord.wordRender());

            }

        });

    }
};

game.startGame();