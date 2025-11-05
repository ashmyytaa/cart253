/**
 * Vertical circles
 * Pippin Barr
 * 
 * Draws a series of circles from the top to the bottom of the canvas.
 * Arguably not in the most efficient way.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw circles from the top to the bottom of the canvas
 */
function draw() {
    background(0);

    let x = width / 2;
    let y = 0;
    let diameter = 10;

    // Here is the magical while loop
    // Keep checking if y is still less than the height...
    while (y <= height) {
        // If it is, draw the next circle
        ellipse(x, y, diameter);
        // And increase y to move down
        y += diameter;
    }

    // Draw a series of 50-pixel diameter circles
    // Starting at the top of the canvas
    // And ending at the bottom
    // ellipse(200, 0, 50);
    // ellipse(200, 50, 50);
    // ellipse(200, 100, 50);
    //ellipse(200, 150, 50);
    //ellipse(200, 200, 50);
    //ellipse(200, 250, 50);
    //ellipse(200, 300, 50);
    // ellipse(200, 350, 50);
    // ellipse(200, 400, 50);
}