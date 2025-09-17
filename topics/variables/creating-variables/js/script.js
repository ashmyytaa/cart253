/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

//VARIABLES BEFORE SETUP


// Our cheese colour broken into RGB
let cheeseRed = 255;
let cheeseGreen = 255;
let cheeseBlue = 0;

// Our cheese hole
let holeShade = 0; // Greyscale value for the hole
let holeX = 140; // x-coordinate of the hole
let holeY = 175; // y-coordinate of the hole
let holeSize = 180; // Diameter of the hole




function setup() {
    createCanvas(480, 480);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    // Cheese colour (yellow)
    // background(255, 255, 0);
    background(cheeseRed, cheeseGreen, cheeseBlue);


    // Draw a hole in the upper left
    push();
    noStroke();

    //fill(0);
    fill(holeShade);

    // When we only provide a width argument we get a circle
    // with that diameter, so height is also 180
    // ellipse(140, 175, 180);


    // ellipse(140, 175, holeSize);
    ellipse(holeX, holeY, holeSize);

    pop();

}