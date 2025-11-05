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
function setup() {
    createCanvas(400, 400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    for (let x = 0; x <= width; x++) {
        // Each time, we will draw a line vertically on the canvas at x
        push();
        // We will choose a colour for the line by mapping the current x
        // Which is between 0 and width
        // To a valid fill value, which is between 0 and 255
        let strokeColour = map(x, 0, width, 0, 255);
        stroke(strokeColour);
        // Draw the line
        line(x, 0, x, height);
        pop();
    }


}