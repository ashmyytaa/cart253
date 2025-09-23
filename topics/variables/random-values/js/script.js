/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let bug = {
    x: 0,
    y: 200,
    size: 10
};


function setup() {
    createCanvas(400, 400);
    //frameRate(5);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background(0);


    // let randomFill = random(0, 255);
    // fill(randomFill);

    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    fill(r, g, b);

    let x = random(0, width); // x is anywhere horizontally
    let y = random(0, height); // y is anywhere vertically
    ellipse(x, y, 100);


    // Add a random number between 1 and 5 to the big's position
    // to make it move jerkily
    bug.x += random(1, 5);
    // ellipse(bug.x, bug.y, bug.size);

}