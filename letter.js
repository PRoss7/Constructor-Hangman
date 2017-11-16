var Letter = function (lttr) {

    this.letter = lttr;
    this.show = false;
    this.showLetter = function () {

        if (this.letter == " ") {

            this.show = true;
            return " ";

        } if (this.show === false) {

            return "_";

        } else {

            return this.letter;

        }

    }

}

module.exports = Letter;

