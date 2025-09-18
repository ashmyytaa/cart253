/**
 * Ashmitha Kanagiah
 * 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let bird = {
    x: 120,
    y: 480,
    size: 50,

    // NEW! We'll set the velocity to start at 0, the bird is not moving
    velocity: {
        x: 0,
        y: 0
    },
    // NEW! We now have acceleration properties, these will be ADDED to the
    // velocity every frame
    acceleration: {
        x: 0.025,
        // The y acceleration is negative so the bird will go UP
        y: -0.05
    }

}


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 480);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    // NEW Change the bird's velocity by adding its acceleration to its
    // velocity
    // You can see it's the same idea as with changing the position using
    // the velocity. We change the velocity using the acceleration.
    bird.velocity.x = bird.velocity.x + bird.acceleration.x;
    bird.velocity.y = bird.velocity.y + bird.acceleration.y;

    // Move the bird by adding its velocity in x and y
    bird.x = bird.x + bird.velocity.x;
    bird.y = bird.y + bird.velocity.y;

    // Draw the bird
    ellipse(bird.x, bird.y, bird.size);

}