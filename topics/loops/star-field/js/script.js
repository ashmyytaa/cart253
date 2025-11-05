/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const NUM_STARS = 100;


function setup() {
    createCanvas(400, 400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    randomSeed(21

    );

    //if i dont use random seed it will be more animating and 
    //will keep generating random
    // A for-loop to count from 0 up to the number of stars
    for (let i = 0; i < NUM_STARS; i++) {
        drawStar();

    }

}

function drawStar() {
    push();
    const x = random(0, width);
    const y = random(0, height);
    const diameter = random(2, 5);
    ellipse(x, y, diameter);
    pop();
}