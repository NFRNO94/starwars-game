// constructor variable for game logic
//  select character function for user
//  select character function for ai
//  assign characters a health value
//  assign characters an attack value
//  start game on attack click
//``defeat character function
// choose a new character to defeat
// reset game on click of reset

// constructor for game
function Character(name, title, image, hitPts, attackPts) {
    this.name = name;
    this.title = title;
    this.image = image;
    this.hitPts = hitPts;
    this.attackPts = attackPts;
    this.printStats = function () {
        console.log("Name: " + this.name + "\nTitle: " + this.title
            + "\nImageUrl: " + this.image + "\nHit Points: "
            + this.hitPts + "\nAttack Points: " + this.attackPts);
    };
    this.isAlive = function () {
        if (this.hitPts > 0) {
            console.log(this.name + " is still alive!"
                + "\n---------------------------------\n");
            return true;
        }
        console.log(this.name + " has been defeated!");
        return false;
    };
    this.attack = function (character2) {
        character2.hitPts -= this.attackPts
    };
    this.levelUp = function () {
        this.hitPts += 200;
    };
};

// object to store characters
let characters = {};

characters.darthMaul = new Character("Darth Maul", "Sith Lord", "assets/images/darthMaul3.jpg", 300, 50);
characters.obiWan = new Character("Obi Wan Kenobi", "Jedi", "assets/images/obi-wan.png", 350, 35);
characters.quiGonJinn = new Character("Qui-Gon Jinn", "Jedi", "assets/images/quigon.jpg", 250, 45);
characters.darthVader = new Character("Darth Vader", "Sith Lord", "assets/images/darth-vader-2.jpg", 400, 40);
// characters.rey = new Character("Rey", "Jedi", "assets/images/rey.jpg", 420, 30);
// characters.kyloRen = new Character("Kylo Ren", "Sith Lord", "assets/images/kylo.jpg", 380, 35);

console.log(characters);
characters.darthMaul.printStats();
characters.obiWan.printStats();
characters.quiGonJinn.printStats();
characters.darthVader.printStats();
// characters.rey.printStats();
// characters.kyloRen.printStats();


// while (obiWan.isAlive() === true && darthMaul.isAlive() === true) {
//     obiWan.attack(darthMaul);
//     darthMaul.attack(obiWan);
//     obiWan.printStats();
//     darthMaul.printStats();
// }

$(document).ready(function () {
    let user;
    let enemies = [];
    let ai;
    let turnCounter = 1;
    let killCounter = 0;

    // renderCharacter function to render character cards
    let charRender = function (character, renderArea) {
        let cardDiv = $("<div class='card' data-name='" + character.name + "'>");
        let charName = $("<p class='character-name card-title text-center'>").text(character.name);
        let charImg = $("<img alt='image' class='character-img img-fluid'>").attr("src", character.image);
        let charHitPts = $("<h6 class='character-health text-center'>").text(character.hitPts);
        cardDiv.append(charName).append(charImg).append(charHitPts);
        $(renderArea).append(cardDiv);
    };

    // function to load all characters in character section
    let initializeGame = function () {
        for (let key in characters) {
            charRender(characters[key], "#characters-section");
        };
    };


    let charUpdate = function (charObj, areaRender) {
        $(areaRender).empty();
        charRender(charObj, areaRender);
    };

    let enemyRender = function (enArr) {
        // .hide for choose your caharacter subtitle
        //.show for new subtitle for available to attack

        // loop to go through available characters to render enemies
        for (let i = 0; i < enArr.length; i++) {
            charRender(enArr[i], "#characters-section")
        };
    };

    let gameMessage = function(message) {
        let messageTag = $("#game-message");
        let newMessage = $("<div").text(message);
        messageTag.append(newMessage)
    };

    let resetGame = function (resultMessage) {
        // restart button variable
        let restart = $("<button type='button' class='btn btn-danger btn-sm mb-1'>Reset</button>").click(function () {
            location.reload();
        });

        // victory message div variable
        let gameState = $("<div>").text(resultMessage);

        //render the restart and victory message variable
        // $("body").append(gameState);
        $("#restart").append(restart);
    };

    initializeGame();
    resetGame();
});

