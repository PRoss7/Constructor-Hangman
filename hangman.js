var Word = require("./word.js");

var inquirer = require("inquirer");

console.log("Lets Play Some Hangman!!");
console.log("Try to guess my favorite TV Character, Movie, TV Show or Band!");
console.log("Good Luck....;)");
console.log("==================================================================");


game = {

    wordBank: ["Sterling Archer", "Step Brothers", "Rick and Morty", "Guns n Roses"],
    guessedLetts: [],
    guessesLeft: 10,
    currentWord: null,

    startGame: function (wrd) {

        var that = this;

        if (this.guessedLetts.length > 0) {

            this.guessedLetts = [];

        }

        inquirer.prompt([{

            name: "play",
            type: "confirm",
            message: "Areee.... youuu.... REEEAAADDYYYYY????"

        }]).then(function (answer) {

            if (answer.play) {

                that.newGame();

            } else {

                console.log("Alright, alright fine we don't HAVE to play");

            }

        })
    },

    newGame: function () {

        if (this.guessesLeft === 10) {

            var randWord = Math.floor(Math.random() * this.wordBank.length);
            this.currentWord = new Word(this.wordBank[randWord]);
            this.currentWord.getLetter();
            console.log(this.currentWord.wordRender());
            this.keepPrompting();

        } else {

            this.resetGuesses();
            this.newGame();

        }

    },

    resetGuesses: function () {

        this.guessesLeft = 10;

    },

    keepPrompting: function () {

        var that = this;

        inquirer.prompt([{

            name: "chosenLetter",
            type: "input",
            message: "Guess a letter",
            validate: function (value) {

                if (checkLetter(guessedLetter)) {

                    return true;

                } else {

                    return false;

                }

            }

        }]).then(function (ltr) {

            var letterReturn = (ltr.chosenLetter).toUpperCase();

            var guessedAlready = false;

            for (var i = 0; i < that.guessedLetts.length; i++) {

                if (letterReturn === that.guessedLetts[i]) {

                    guessedAlready = true;

                }

            }

            if (guessedAlready === false) {

                that.guessedLetts.push(letterReturn);

                var found = that.currentWord.checkLetter(letterReturn);

                if (found === 0) {

                    console.log("Wrong!");
                    that.guessesLeft--;
                    that.display++;
                    console.log("Lives left: " + that.guessesLeft);
                    console.log(game[(that.display) - 1]);

                    console.log("\n====================================");
                    console.log(that.currentWord.wordRender());
                    console.log("\n====================================");

                    console.log("Letters guessed: " + that.guessedLetts);

                } else {

                    console.log("That right. keep going!");

                    if (that.currentWord.findWord() === true) {

                        console.log(that.currentWord.wordRender());
                        console.log("Congrats! You won the game!");

                    } else {

                        console.log("Lives left: " + that.guessesLeft);
                        console.log(that.currentWord.wordRender());
                        console.log("\n ====================================");
                        console.log("Letters guessed: " + that.guessedLetts);

                    }

                }

                if (that.guessesLeft > 0 && that.currentWord.wordFound === false) {

                    that.keepPrompting();

                } else if (that.guessesLeft === 0) {

                    console.log("Game over!");
                    console.log("The word you were looking for was: " + that.currentWord.word);

                }

            } else {

                console.log("You've guessed that letter already! Try again.");
                that.keepPrompting();
            }

        });

    }

}

game.startGame();

