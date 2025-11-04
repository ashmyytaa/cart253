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
        speed: 20,

        state: "idle" // State can be: idle, outbound, inbound
    },
};


//constant fly
const fly = {
    x: 0,

    y: undefined, // Will be random
    size: 20,
    speed: 15,

    wings: { //frog wings
        x: 0,
        y: undefined, // will be random
        size: 10,
        height: 25
    }
};

let time;
let score;
let filling = false;

var balls = [];


/**
 * Creates the canvas and initializes the fly
 */
function setup() {


    createCanvas(900, 480);
    score = 0;


    // Give the fly its first random position
    resetFly();
}

function draw() {
    background("#7ac7eaff");

    bgOne();

    scoreSystem();
    moveFrog();
    moveTongue();
    drawFrog();
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
    //fly one
    push();
    stroke("#000000");
    fill("#ffffffff");
    //triangle(fly.wings.x, fly.wings.y, fly.wings.size, fly.wings.height, 86, 75);
    ellipse(fly.wings.x, fly.wings.y, fly.wings.size, fly.wings.height);
    pop();

    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size, 15);
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
        resetFly(fly.x, fly.y, fly.wings.x, fly.wings.y);
        score++;
        filling = true;

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




    if (score >= 5 && score < 10) {
        bgTwo();


        push();
        textSize(50);
        fill('red');
        text("Kepp going down!", 200, 200);
        pop();




    }

    if (score >= 10 && score < 15) {
        bgThree();

        push();
        textSize(50);
        fill('red');
        text("Yes letsgo!", 200, 200);
        pop();

    }


    if (score >= 15 && score < 20) {
        bgFour();

        push();
        textSize(50);
        fill('red');
        text("Almost there!", 200, 200);
        pop();


    }

    checkTongueFlyOverlap();
    moveFly();
    drawFly();

    // push();
    //  text("score", 700, 40);
    //  text(score, 700, 60);
    //  pop();




    //  score = constrain(score, 200, width);
    push()
    noStroke();
    fill(100, 100, 250);
    rect(0, 50, score, 50);
    pop();


    if (score >= 20) {
        bgFive();
        treasureExplosion();

        push();
        textSize(50);
        fill('white');
        strokeWeight(4)
        stroke('black');
        text("You win! You found the gold mine!!", 100, 200);
        pop();
    }

}


//function wave
function wave(waveHeight, waveScale, waveColor, waveAddition) {
    let noiseLevel = waveHeight;
    let noiseScale = waveScale;

    push();
    fill(waveColor);
    noStroke();

    beginShape();
    for (let x = 0; x < width; x += waveAddition) {
        let nx = noiseScale * x;
        let nt = noiseScale * frameCount;
        let y = noiseLevel * noise(nx, nt);
        vertex(x, y);
    }


    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    pop();
}


function bgOne() {
    wave(300, 0.002, "rgba(74, 141, 217, 1)", 1);
    wave(600, 0.002, "#26a2f0ff", 2);
    wave(900, 0.002, "#108bd8ff", 3);
}
function bgTwo() {
    background("#4294c0ff");
    wave(300, 0.002, "#66b2e1ff", 1);
    wave(600, 0.002, "#478cb8ff", 2);
    wave(900, 0.002, "#3c84b1ff", 3);
}
function bgThree() {
    background("#2b6f94ff");
    wave(300, 0.002, "#366785ff", 1);
    wave(600, 0.002, "#266992ff", 2);
    wave(900, 0.002, "#12547cff", 3);
}
function bgFour() {
    background("#184158ff");
    wave(300, 0.002, "#0b3a56ff", 1);
    wave(600, 0.002, "#052031ff", 2);
    wave(900, 0.002, "#0a283bff", 3);
}

function bgFive() {
    background("#0d2431ff");
    wave(300, 0.002, "#071c29ff", 1);
    wave(600, 0.002, "#0c1b25ff", 2);
    wave(900, 0.002, "#030f17ff", 3);
}


function treasureExplosion() {

    var ball = {
        x: random(0, width),
        y: random(0, height),
        size: random(5, 50),
        speed: random(1, 5),
        col: color(random(255)),

        fills: {
            r: 255,
            g: 215,
            b: 0,
            a: 200,
        },
    };


    balls.push(ball);


    for (var i = 0; i < balls.length; i++) {

        push()
        fill(balls[i].fills.r, balls[i].fills.g, balls[i].fills.b, balls[i].fills.a);
        noStroke();
        ellipse(balls[i].x, balls[i].y, balls[i].size);
        pop();

        balls[i].y += balls[i].speed;
        if (balls[i].y > height - balls[i].size / 2 ||
            balls[i].y < balls[i].size / 2) {
            balls[i].speed = -balls[i].speed
        }


    }

}

function scoreProgress() {





    score = constrain(score, 200, width);
    push()
    noStroke();
    fill(100, 100, 250);
    rect(0, 50, score, 20);
    pop();


    // if (score >= width) {
    //      score = 0; 
    //  }

}















