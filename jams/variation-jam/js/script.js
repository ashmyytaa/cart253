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
let coral;
let algue;
let blugue;
let seahorse;
let houseOne;
let houseTwo;
let houseThree;
let angle = 0;
let cloud = 0;
let x = [], y = [], x1 = [], y1 = [], x2 = [], y2 = [];
let vx = [], vy = [];

function preload() {
    coral = loadImage('/assets/images/coral.png');
    algue = loadImage('/assets/images/algue.png');
    blugue = loadImage('/assets/images/blugue.png');
    seahorse = loadImage('/assets/images/seahorse.png');
    houseOne = loadImage('/assets/images/houseOne.png');
    houseTwo = loadImage('/assets/images/houseTwo.png');
    houseThree = loadImage('/assets/images/houseThree.png');


}

/**
 * Function setup where we create our canvas
*/
function setup() {
    createCanvas(1200, 600)

    for (let i = 0; i < 50; i++) {
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

    ground();

}



function underwater() {

    background("#0d2431ff");

    push();
    noStroke();
    fill(135, 206, 235, 10);
    rect(0, 0, width, height);
    pop();


    wave(300, 0.002, "#071c29ff", 1);
    wave(600, 0.002, "#0c1b25ff", 2);
    wave(900, 0.002, "#030f17ff", 3);

    coralpic();
    fishes();


}

function ground() {
    background(122, 192, 230)
    push();
    fill(88, 166, 102);
    noStroke();
    rect(0, 400, width, 200)
    pop();

    groundObjects();
    movingClouds();
    butterflies();


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

    for (let i = 0; i < 50; i++) {

        x[i] += vx[i];
        y[i] += vy[i];


        if (x[i] < 0 || x[i] > width) vx[i] *= -1;
        if (y[i] < 0 || y[i] > height) vy[i] *= -1;


        push();
        translate(x[i], y[i]);


        if (vx[i] < 0) {
            scale(-1, 1);
        }

        noStroke(); //fish head
        fill(113, 197, 227);
        ellipse(0, 0, 30, 20);

        noStroke(); //fish tail
        fill(113, 197, 227);
        triangle(0, 0, -30, -10, -30, 10);

        noStroke(); //fish eyes
        fill(0);
        ellipse(10, 2, 5, 5);
        pop();
    }
}

function coralpic() {
    angle += 0.05;

    image(algue, 150, 450 + sin(angle) * 10);
    image(coral, 10, 290 + sin(angle) * 20);
    image(blugue, 10, 400 + sin(angle) * 10);
    image(seahorse, 700, 200 + sin(angle) * 10, 70, 130);


}


function bubbleMouse() {

    push();
    let bubbleSize = random(15, 40);
    noFill();
    stroke(255, 255, 255, 180);
    strokeWeight(2);
    ellipse(mouseX + random(-3, 3), mouseY + random(-3, 3), bubbleSize, bubbleSize);
    pop();
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

function butterflies() {
    for (let i = 0; i < 10; i++) {

        x[i] += vx[i];
        y[i] += vy[i];

        if (x[i] < 0 || x[i] > width) vx[i] *= -1;
        if (y[i] < 0 || y[i] > height) vy[i] *= -1;


        //lower wings
        push();
        translate(x[i], y[i]);
        noStroke();
        fill(206, 80, 235);
        ellipse(-15, -10, 25, 20); // left upper
        ellipse(15, -10, 25, 20);  // right upper
        pop();

        //upper wings
        push();
        translate(x[i], y[i]);
        noStroke();
        fill(206, 80, 235);
        ellipse(-15, 10, 25, 20); // left lower
        ellipse(15, 10, 25, 20);  // right lower
        pop();

        //body
        push();
        translate(x[i], y[i]);
        noStroke();
        fill(66, 46, 34);
        rect(-1, -10, 5, 35, 20);
        pop();

        //antenna
        push();
        translate(x[i], y[i]);
        stroke(66, 46, 34);
        strokeWeight(1);
        line(0, -10, -15, -15);
        line(0, -10, 15, -15);
        pop();
    }




}



function groundObjects() {

    push();
    noStroke();
    fill(235, 192, 5);
    ellipse(130, 100, 150)
    pop();


    image(houseOne, 150, 200, 200, 200);
    image(houseTwo, 350, 200, 200, 200);
    image(houseThree, 900, 200, 270, 200);

}

function movingClouds() {

    drawCloud(cloud, 50, 110);
    drawCloud(cloud + 200, 150, 100);
    drawCloud(cloud - 200, 200, 90);


    cloud += 1;
    if (cloud > width + 200) cloud = -300;
}

function drawCloud(x, y, size) {

    push();
    noStroke();
    fill(255);
    ellipse(x, y, size * 0.9, size * 0.7);
    pop();

    push();
    noStroke();
    fill(255);
    ellipse(x - size * 0.5, y + size * 0.2, size * 0.7, size * 0.5);
    pop();

    push();
    noStroke();
    fill(255);
    ellipse(x + size * 0.5, y + size * 0.2, size * 0.7, size * 0.5);
    pop();

}



/**    
 * 
 * planey
 * push();
    noStroke();
    fill(255);
    ellipse(x, y, size, size * 0.8);
    pop();

    push();
    noStroke();
    fill(255);
    ellipse(x - size * 0.5, y, size * 0.9, size * 0.3);
    pop();

    push();
    noStroke();
    fill(255);
    ellipse(x + size * 0.5, y, size * 0.9, size * 0.3);
    pop();
 */
