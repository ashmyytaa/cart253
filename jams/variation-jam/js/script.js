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

/**
 * Function setup where we create our canvas
*/
function setup() {
    createCanvas(900, 600)
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

    for (let i = 0; i < 20; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let x1 = random(0, width);
        let y1 = random(0, height);
        let x2 = random(0, width);
        let y2 = random(0, height);

        if (x === x1 && x2 === y2) {

            push();
            noStroke();
            fill(255)
            triangle(x, y, x1, y1, x2, y2);
            pop();

            push();
            noStroke();
            fill(255)
            ellipse(x, y, 60, 20)


        }




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