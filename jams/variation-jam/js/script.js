/**
 * Our Beautiful Earth
 * Ashmitha Kanagiah
 * 
 * This project is a fun interaction where the user can go through all the main three layers that
 * we know of which is space, the ground we live in, as well as the underwater. Its a conocept
 * where....

 *
 */

"use strict";

let x = [], y = [], x1 = [], y1 = [], x2 = [], y2 = [];
let vx = [], vy = [];


/**
 * Function setup where we create our canvas
*/
function setup() {
    createCanvas(900, 600)

    for (let i = 0; i < 20; i++) {
        x[i] = random(0, width);
        y[i] = random(0, height);
        x1[i] = random(0, width);
        y1[i] = random(0, height);
        x2[i] = random(0, width);
        y2[i] = random(0, height);

        // Random speed
        vx[i] = random(-2, 2);
        vy[i] = random(-2, 2);
    }
}


/**
 * Function draw where it draws our baackground + calls our functions
*/
function draw() {
    background(0)

    underwater();

}



function underwater() {
    background("#0d2431ff");
    wave(300, 0.002, "#071c29ff", 1);
    wave(600, 0.002, "#0c1b25ff", 2);
    wave(900, 0.002, "#030f17ff", 3);

    fishes();

}

function ground() {
    background(122, 192, 230)


    push();
    fill(88, 166, 102);
    noStroke();
    rect(0, 400, width, 200)
    pop();

}

function space() {
    background(0)



}


function wave(waveHeight, waveScale, waveColor, waveAddition) {
    let noiseLevel = waveHeight; // to determine how tall the wave will go
    let noiseScale = waveScale; // to determe how wavy it will be along the x-axis

    push(); // creates the wave
    fill(waveColor);
    noStroke();
    beginShape();
    for (let x = 0; x < width; x += waveAddition) { // checks along the x-axis to pick values to be added for the wave
        let scale = noiseScale * x;
        let move = noiseScale * frameCount; // framecount makes the wave move
        let y = noiseLevel * noise(scale, move);
        vertex(x, y);
    }
    vertex(width, height); // vertex is used to connect all the point to make up the wave
    vertex(0, height);
    endShape(CLOSE); // to close the shape between the two endpoints
    pop();
}


function stars() {
    for (let i = 0; i < 50; i++) {  // draw 100 particles
        let x = random(0, width);
        let y = random(0, height);
        push();
        noStroke();
        fill('white');
        drawingContext.shadowBlur = 50; // features that i found online that adds glow to a text
        drawingContext.shadowColor = color(255, 255, 255);
        ellipse(x, y, 1.5, 1.5);
        pop();
    }
}



function fishes() {

    for (let i = 0; i < 5; i++) {
        // Move fish
        x[i] += vx[i];
        y[i] += vy[i];

        // Bounce off edges
        if (x[i] < 0 || x[i] > width) vx[i] *= -1;
        if (y[i] < 0 || y[i] > height) vy[i] *= -1;


        push();
        translate(x[i], y[i]);

        // If moving left, flip horizontally
        if (vx[i] < 0) {
            scale(-1, 1);
        }

        noStroke();
        fill(113, 197, 227);

        // Body (centered at 0,0)
        ellipse(0, 0, 80, 50);

        // Tail always behind (to the left of body)
        triangle(-20, 0, -60, -10, -60, 10);

        // Eye (in front)
        fill(0);
        ellipse(20, -5, 5, 5);

        pop();
    }
}


/** 
 * 
 * SPACE ROECKTT
 * 
 *  push();
    noStroke();
    fill(255)
    triangle(30, 70, 30, 50, 60, 60);
    pop();

    push();
    noStroke();
    fill(255)
    ellipse(60, 60, 70, 10)
 */