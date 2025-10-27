/**
 * Mod Jam
 * Ashmitha Kanagiah
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 
 */

"use strict";

//Constant Frog
const frog = {
    body: { //frog body
        x: 320,
        y: 520,
        size: 150,

        eye: { //frog eye
            x: 200,
            y: 450,
            size: 10
        }
    },
    leftEye: { //frog left eye shape
        x: 200,
        y: 450,
        size: 30
    },
    leftPupil: { //frog right pupil
        x: 200,
        y: 450,
        size: 10
    },
    rightEye: {//frog right eye shape
        x: 300,
        y: 450,
        size: 30
    },
    rightPupil: {//frog right pupil
        x: 300,
        y: 450,
        size: 10
    },
    leftEar: {//frog left ear
        x: 240,
        y: 440,
        size: 40
    },
    rightEar: {//frog right ear
        x: 300,
        y: 440,
        size: 40
    },
    tongue: { //frog tongue
        x: undefined,
        y: 480,
        size: 20,
        speed: 50,

        state: "idle" // State can be: idle, outbound, inbound
    },
};


//constant fly
const fly = {
    x: 0,
    y: undefined, // Will be random
    size: 20,
    speed: 5,

    wings: { //frog wings
        x: 0,
        y: undefined, // will be random
        size: 10,
        height: 25
    }
};


let bg; //for background image
let time;
let score;

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    bg = loadImage('assets/images/bg.jpg');

    createCanvas(900, 480);
    score = 0;


    // Give the fly its first random position
    resetFly();
}

function draw() {
    background(bg);
    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();
    scoreSystem();

}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly

    // Handle the fly going off the canvas


    if (fly.y = fly.wings.y) {

        fly.x += 1;
        fly.wings.x += 1;
        fly.y = + 150 * sin(frameCount * 0.05) + 150;
        fly.wings.y = + 150 * sin(frameCount * 0.05) + 150;

    }

    if (fly.x > width && fly.wings.x > width) {
        resetFly();
    }
}




/**
 * Draws the fly as a black circle
 */
function drawFly() {

    push();
    stroke("#000000");
    fill("#ffffffff");
    ellipse(fly.wings.x, fly.wings.y, fly.wings.size, fly.wings.height);
    pop();

    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size, 7);
    pop();



}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = random(-3, 3);
    fly.wings.x = 0;
    fly.y = random(0, 300);
    fly.wings.y = random(0, 300);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {

    frog.body.x = mouseX;
    frog.rightEye.x = mouseX - 25;
    frog.rightPupil.x = mouseX - 25;
    frog.leftEye.x = mouseX + 25;
    frog.leftPupil.x = mouseX + 25;
    frog.leftEar.x = mouseX - 25;
    frog.rightEar.x = mouseX + 25;


}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;



    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#d41a84ff");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();


    //draw frogs ears
    push();
    fill("#d41a84ff");
    noStroke();
    ellipse(frog.leftEar.x, frog.leftEar.y, frog.leftEar.size);
    pop();

    push();
    fill("#d41a84ff");
    noStroke();
    ellipse(frog.rightEar.x, frog.rightEar.y, frog.rightEar.size);
    pop();

    //draw frog's eyes
    push();
    fill("#ffffffff");
    noStroke();
    ellipse(frog.rightEye.x, frog.rightEye.y, frog.rightEye.size);
    pop();

    push();
    fill("#000000ff");
    noStroke();
    ellipse(frog.rightPupil.x, frog.rightPupil.y, frog.rightPupil.size);
    pop();

    push();
    fill("#ffffffff");
    noStroke();
    ellipse(frog.leftEye.x, frog.leftEye.y, frog.leftEye.size);
    pop();

    push();
    fill("#000000ff");
    noStroke();
    ellipse(frog.leftPupil.x, frog.leftPupil.y, frog.leftPupil.size);
    pop();



}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    // tongue.zie /2 + fly.size /2
    const eaten = (d < frog.tongue.size + fly.size);
    if (eaten) {
        // Reset the fly
        resetFly();
        score++;


        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}


/**
 * Scoring system is displayed
 */
function scoreSystem() {
    text("score", 700, 40);
    text(score, 700, 60);

    if (score > 5) {
        push();
        textSize(80);
        fill('red');
        text("YOU WIN", 200, 200);
        pop();

        push();
        textSize(30);
        fill('red');
        text("Press any key to move to the next level!", 200, 350);
        pop();
    }
}






