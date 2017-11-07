var randomWord = function () {

    var words = [
        "Sterling Archer",
        "Step Brothers",
        "Rick and Morty",
        "Guns n Roses"
    ];

    var random = Math.floor(words.length * Math.random());

    console.log(random);

}

module.exports = randomWord();