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
function Character(name, title, hitPts, attackPts) {
    this.name = name;
    this.title = title;
    this.hitPts = hitPts;
    this.attackPts = attackPts;
    this.printStats = function () {
        console.log("Name: " + this.name + "\nTitle: " + this.title
            + "\nHit Points: " + this.hitPts + "\nAttack Points: "
            + this.attackPts);
    };
    this.isAlive = function () {
        if (this.hitPts > 0) {
            console.log(this.name + " is still alive!"
                + "\n---------------------------------\n");
            return true;
        }
        console.log(this.name + " has died!");
        return false;
    };
    this.attack = function (character2) {
        character2.hitPts -= this.attackPts
    };
    this.defeatOpp = function () {
    }
};


let darthMaul = new Character("Darth Maul", "Sith Lord", 300, 50);
let obiWan = new Character("Obi Wan Kenobi", "Jedi", 350, 40);
let quiGonJinn = new Character("Qui-Gon Jinn", "Jedi", 250, 35);
let darthVader = new Character("Darth Vader", "Sith Lord", 400, 45);

darthMaul.printStats();
obiWan.printStats();
quiGonJinn.printStats();
darthVader.printStats();

// while (obiWan.isAlive() === true && darthMaul.isAlive() === true) {
//     obiWan.attack(darthMaul);
//     darthMaul.attack(obiWan);

//     obiWan.printStats();
//     darthMaul.printStats();
// }