/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
// Data about our cube
const cube = {
    // How long are its sides?
    size: 100,
    // How is it currently rotated on x and z (radians)
    rotation: {
        x: 0,
        z: 0
    },
    // How much does it rotate each frame on x and z (radians)
    rotationSpeed: {
        x: 0.1,
        z: 0.01
    }
};

/**
 * Create the WEBGL canvas
 */
function setup() {
    // Note we include WEBGL as the third argument for createCanvas()
    createCanvas(400, 400, WEBGL);
}

/**
 * Displays a rotating cube
 */
function draw() {
    // The void
    background(0);

    // Still makes sense to protect these transformations (the rotations)
    // by using push() and pop()
    push();
    // Rotates everything we're about to draw on the x-axis
    rotateX(cube.rotation.x);
    // Rotates everything we're about to draw on the z-axis
    rotateZ(cube.rotation.z);
    // Draw a "box" (a cube), specifying the length of its sides
    box(cube.size);
    pop();

    // Update the cube's rotation so it rotates
    cube.rotation.x += cube.rotationSpeed.x;
    cube.rotation.z += cube.rotationSpeed.z;
}