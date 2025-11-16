/**
 * Tarot
 * Pippin Barr
 * 
 * Some experiments with data representing a Tarot deck
 */

"use strict";

let tarot;
let fortune;


function preload() {
    //Used in preload, loadJSON will just return the data into our variable
    tarot = loadJSON("assets/data/tarot.json");
}

/**
 * tbd.
*/
function setup() {
    createCanvas(windowWidth, windowHeight);


    // Choose a random card
    let card = random(tarot.tarot_interpretations);
    // Choose a random fortune
    fortune = random(card.fortune_telling);
}


/**
 * tbd.
*/
function draw() {
    background(0);

    // Get the description in a variable by following the correct path through the tarot object
    let description = tarot.description;
    let firstShadowMeaning = tarot.tarot_interpretations[0].meanings.shadow[0];


    // Display the meaning
    push();
    textSize(18);
    textAlign(CENTER);
    fill(255, 255, 0);
    text(description, width / 2, height / 2);
    pop();

    push();
    textSize(18);
    textAlign(CENTER);
    fill(255, 255, 0);
    text(firstShadowMeaning, width / 2, height / 2);
    pop();


    push();
    textSize(18);
    textAlign(CENTER, CENTER);
    fill(255, 255, 0);
    text(fortune, width / 2, height / 2);
    pop();

}