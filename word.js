var Letter = require("./letter.js");

function Word(wrd) {

    this.word = wrd
    this.letters = [];
    this.found = false;
    this.getLetter = function () {

        for (var i = 0; i < this.word.length; i++) {

            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter);

        }

    };

    this.findWord = function () {

        if (this.letters.every(function (lttr) {

            return lttr.show === true;

        })) {

            this.wordFound = true;
            return true;
        }

    };

    this.checkLetter = function (guessedLetter) {

        var toReturn = 0;

        this.letters.forEach(function (lttr) {

            if (lttr.letter === guessedLetter) {

                lttr.show = true;
                toReturn++;

            }

        })

        return toReturn;

    };

    this.wordRender = function () {

        var display = "";

        // this.letter.forEach(function (lttr) {

        //     var currentLet = lttr.showLetter();
        //     display += currentLet;

        // });

        for (var i = 0; i < this.letter; i++) {

            var currentLetFunc = function (lttr) {

                var currentLet = lttr.showLetter();
                display += currentLet;

            }

        }

        return display;

    };

}

module.exports = Word;

