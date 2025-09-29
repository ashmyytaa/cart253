/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let breathe = {
    x: 200,
    y: 200,
    size: 10,
    minSize: 10,
    maxSize: 200,
    angle: 0
}

let undulator = {
    x: 0,
    y: 200,
    minY: 0,
    maxY: 400,
    size: 25,
    angle: 0
}

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

    // Calculate the breathe shape's size based on a sine wave
    // Note how we use map() to convert from sine's range of -1..1
    // to the breathing shape's size range
    const sine = sin(breathe.angle);
    breathe.size = map(sine, -1, 1, breathe.minSize, breathe.maxSize);

    // Draw the breathing shape
    push();
    noStroke();
    fill("#ff0000");
    ellipse(breathe.x, breathe.y, breathe.size);
    pop();

    // Increase the angle to make sine return a different result
    // Angles are in RADIANS by default
    // But you can use degreeMode(DEGREES) to switch if you want
    breathe.angle += 0.01;


    //THE OTHER PARTTTTTTTTTT

    const cosine = cos(undulator.angle);
    undulator.y = map(cosine, -1, 1, undulator.minY, undulator.maxY);

    // Draw the undulating shape
    push();
    noStroke();
    fill("#ff0000");
    ellipse(undulator.x, undulator.y, undulator.size);
    pop();

    // Increase the angle to make cosine return a different result
    // Angles are in RADIANS by default
    // But you can use degreeMode(DEGREES) to switch if you want
    undulator.angle += 0.1;

    // Move the undulator on x so we see it
    undulator.x += 1;



}