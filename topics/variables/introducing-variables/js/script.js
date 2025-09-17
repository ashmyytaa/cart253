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
    // Create the canvas
    createCanvas(640, 640);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    // Draw a circle in the centre of the canvas
    push();
    noStroke();

    //NORMAL FILL
    // fill(255, 255, 0);

    //NORMAL
    //  ellipse(320, 320, 100, 100);

    //NORMAL - using division of canvas to find the middle
    //ellipse(width / 2, height / 2, 100, 100);

    //MOVING CIRCLE
    // ellipse(mouseX, mouseY, 100, 100);


    //SIZE-CHANGING CIRCLE
    //ellipse(width / 2, height / 2, mouseX, mouseY);


    //COLOR-CHANGING CIRCLE
    fill(mouseX, mouseY, 0);
    // ellipse(width / 2, height / 2, 100, 100);
    ellipse(mouseX, mouseY, 100, 100);




    //  width always contains the width in pixels of the canvas(i.e.what you set it to in createCanvas())
    // height always contains the height in pixels of the canvas(i.e.what you set it to in createCanvas())
    pop();

}