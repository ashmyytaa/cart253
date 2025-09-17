/**
 * Self-Esteem
 * Pippin Barr
 * 
 * A portrait of Pippin's self-esteem on a sunny day.
 */

"use strict";

// Colour of the sky - NORMALL
//let skyRed = 150;
//let skyGreen = 180;
//Let skyBlue = 250;

//SKY - WITH OBJECTS
let sky = {
    red: 150,
    green: 180,
    blue: 250
};

// The sun NORMALLLL
// Colour
//let sunRed = 255;
//let sunGreen = 255;
//let sunBlue = 0;
// Position and size
//let sunX = 500;
//let sunY = 70;
//let sunSize = 100;

//OBJECTS
//let sun = {
//   red: 255,
//   green: 255,
//  blue: 0,
//  x: 500,
//  y: 70,
//size: 100
//};

let sun = {
    fill: { //another object in OBJECT
        red: 255,
        green: 255,
        blue: 0,
    },
    x: 500,
    y: 70,
    size: 100
};

// My self-esteem - NORMALL
// Greyscale shade
//let selfEsteemShade = 0;
// Position and size
//let selfEsteemX = 320;
//let selfEsteemY = 320;
//let selfEsteemSize = 20;

// self-esteem - WITH OBJECTS
let selfEsteem = {
    shade: 0,
    x: 320,
    y: 320,
    size: 20
};



/**
 * Create the canvas
 */
function setup() {
    // Create the canvas
    createCanvas(640, 320);
}

/**
 * Displays the sky, sun, and self-esteem
 */
function draw() {
    // A nice blue sky - NORMALL
    // background(skyRed, skyGreen, skyBlue);

    // sky - WITH OBJECTS
    background(sky.red, sky.green, sky.blue);


    // The sun NORMALL
    // push();
    //fill(sunRed, sunGreen, sunBlue);
    //noStroke();
    // ellipse(sunX, sunY, sunSize);
    //pop();

    //WITH OBJECTS
    push();
    //fill(sun.red, sun.green, sun.blue); // with objects
    fill(sun.fill.red, sun.fill.green, sun.fill.blue); // with objects in an objects

    noStroke();
    ellipse(sun.x, sun.y, sun.size);
    pop();

    // My self esteem
    push();
    //  fill(selfEsteemShade);

    //wiht OBJECTS
    fill(selfEsteem.shade);

    noStroke();
    //  ellipse(selfEsteemX, selfEsteemY, selfEsteemSize);

    //WITH OBJECTS
    ellipse(selfEsteem.x, selfEsteem.y, selfEsteem.size);

    pop();
}