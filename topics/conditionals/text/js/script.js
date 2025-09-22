/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let myName = "Gladiolus";


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    push();
    // Set text colour with fill
    fill(255, 0, 0);
    // Set text size with textSize()
    textSize(64);
    // Set text align with textAlign()
    textAlign(CENTER, CENTER);
    // Set text styling with textStyle()
    textStyle(BOLD);
    // We can display text by just putting it directly in quotes
    text("Hi, my name is:", 200, 180);
    // We can display text inside a variable
    text(myName, 200, 220)
    pop();
}