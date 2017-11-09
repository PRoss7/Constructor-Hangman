

var letter = function (let) {

    this.char = let;
    this.show = false;
    this.showLetter = function () {

        return !(this.show) ? "_" : this.char;

    }

}

module.exports = letter;

