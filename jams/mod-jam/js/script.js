/**
 * Frog Diving - Mod Jam
 * Ashmitha Kanagiah
 * 
 * A game of catching flies with the tongue of our frog.
 * As you keep catching flies, you keep entering into the dept of the ocean,
 * to then reach the bottom of the ocean which contains the treasure mines, where
 * there is an unlimited amount of gold. 
 * There is NO loosing in this game you are only winning as u reach the treasure mine, which marks the end of the game.
 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue,
 * - Click to launch the tongue, to catch flies
 * - When flies are being catches, you can see your progress on your progress bar. 
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
        speed: 10,

        state: "idle" // State can be: idle, outbound, inbound
    },
};
//constant fly
const fly = {

    x: 0, //Will be defined later on

    y: undefined, // Will be random
    size: 20,
    speed: 50,

    wings: { //frog wings
        x: 0, //Will be defined later on
        y: undefined, // will be random
        size: 10,
        height: 25
    }
};


let score; // To track the amount of flies catched by the frog & to be used to determine the frog's progress.
let gameState = "start"; //To be able to launch the title screen and game mode

var balls = []; //Empty array balls which will mimick our gold for our treasure mine.



/**
 * Creates the canvas
 */
function setup() {

    createCanvas(900, 480);

    score = 0; //Sets the score to zero

    // Give the fly its first random position
    resetFly();

}

function draw() {
    background("#00aeffff");

    if (gameState === "start") {
        showTitleScreen() //Title screen will show up since we initialized beforehand that gameState = start

    } else if (gameState === "maingame") { //Maingame will contain the components of our frog diving game
        //All the functions that compose our frog diving game are called here
        bgOne();
        scoreSystem();
        moveFrog();
        moveTongue();
        drawFrog();
    }
}



/**
 * Moves the fly according to a fixed speed
 * Resets the fly if it gets all the way to the right of the canvas
 */
function moveFly() {


    if (fly.y = fly.wings.y) { //Checks if the fly body and fly wings coordinate togheter, since they get random y values

        fly.x += 5; //X moves to the right by + 5
        fly.wings.x += 5; //X moves to the right by + 5
        fly.y = + 150 * sin(frameCount * 0.05) + 150; //Y moves along to the right with a sine function, and also made sure that the fly dosent move upoff the canvas
        fly.wings.y = + 150 * sin(frameCount * 0.05) + 150; //Y moves along to the right with a sine function, and also made sure that the fly dosent move upoff the canvas
    }

    if (fly.x > width && fly.wings.x > width) { //Checks if fly reaches the end of the canvas on the right side
        resetFly(); //Resets fly if fly reaches the right-end of the canvas
    }
}
/**
 * Draws the fly as a black circle
 */
function drawFly() {
    //draws the fly wings
    push();
    stroke("#000000");
    fill("#ffffffff");
    ellipse(fly.wings.x, fly.wings.y, fly.wings.size, fly.wings.height);
    pop();
    //draw the fly
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

    fly.x = random(-3, 3); //x-value gets resetted a random value between -3 and 3
    fly.wings.x = 0;
    fly.y = random(0, 300); //y-value gets resetted on the canvas a random position
    fly.wings.y = random(0, 300); //y-value gets resetted on the canvas a random position

}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() { //moves all the different parts of the frog and fly along the x-axis, coordinatly with the mouse mouvement
    frog.body.x = mouseX;
    frog.rightEye.x = mouseX - 25;
    frog.rightPupil.x = mouseX - 25; //adding +25 or -25 so that shapes dont overlap with the mouseX
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
    push(); //left ear
    fill("#d41a84ff");
    noStroke();
    ellipse(frog.leftEar.x, frog.leftEar.y, frog.leftEar.size);
    pop();

    push(); //right ear
    fill("#d41a84ff");
    noStroke();
    ellipse(frog.rightEar.x, frog.rightEar.y, frog.rightEar.size);
    pop();

    //draw frog's eyes
    let moveSpeed = 15; // speed of how the eyes pupil will move
    let pupilSpeedX = map(mouseX, 0, width, -moveSpeed, moveSpeed); //using map() to make the pupils move with mouseX along the x-axis
    let pupilSpeedY = map(mouseY, 0, height, -moveSpeed, moveSpeed); //using map() to make the pupils move with mouseY along the y-axis

    push(); //right eye
    fill("#ffffffff");
    noStroke();
    ellipse(frog.rightEye.x, frog.rightEye.y, frog.rightEye.size);
    pop();

    push(); //right pupil
    fill("#000000ff");
    noStroke();
    ellipse(frog.rightPupil.x + pupilSpeedX, frog.rightPupil.y + pupilSpeedY, frog.rightPupil.size);
    pop();

    push(); //left eye
    fill("#ffffffff");
    noStroke();
    ellipse(frog.leftEye.x, frog.leftEye.y, frog.leftEye.size);
    pop();

    push(); //left pupil
    fill("#000000ff");
    noStroke();
    ellipse(frog.leftPupil.x + pupilSpeedX, frog.leftPupil.y + pupilSpeedY, frog.leftPupil.size);
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
        score++; //adds up to the score each time the frog catches a fly

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

    let progress = 0; //declared a progress variable, that will be used later on for our progress bar

    if (score >= 5 && score < 10) {
        bgTwo();

        progress = 100;

        push();
        textSize(15);
        fill('white');
        drawingContext.shadowBlur = 50; // features that i found online that adds glow to a text
        drawingContext.shadowColor = color(255, 255, 255); //features that i found online that adds glow to a text
        text("Progress: 1000ft deep", 550, 25);
        pop();

    }

    if (score >= 10 && score < 15) {
        bgThree();

        progress = 150;

        push();
        textSize(15);
        fill('white');
        drawingContext.shadowBlur = 50; // features that i found online that adds glow to a text
        drawingContext.shadowColor = color(255, 255, 255); //features that i found online that adds glow to a text
        text("Progress: 2000ft deep", 550, 25);
        pop();
    }


    if (score >= 15 && score < 20) {
        bgFour();

        progress = 200;


        push();
        textSize(15);
        fill('white');
        drawingContext.shadowBlur = 50; // Afeatures that i found online that adds glow to a text
        drawingContext.shadowColor = color(255, 255, 255); //features that i found online that adds glow to a text
        text("Progress: 3000ft deep", 550, 25);
        pop();

    }

    //function calling
    checkTongueFlyOverlap();
    moveFly();
    drawFly();

    //rectangle that displays the progress bar that is relative to the progress of when the frog catches flies
    push()
    noStroke();
    fill(235, 52, 91, 80);
    rect(550, 35, progress, 20);
    pop();


    if (score >= 20) {

        bgFive();
        treasureExplosion();

        push();
        textSize(50);
        noStroke();
        fill('white');
        drawingContext.shadowBlur = 50; // Adjust for desired blurriness
        drawingContext.shadowColor = color(255, 255, 255);
        text("You found the gold mine!!", 150, 200);
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
    wave(300, 0.002, "rgba(17, 152, 220, 1)", 1);
    wave(600, 0.002, "#2ca8d1ff", 2);
    wave(900, 0.002, "#3ecffbff", 3);
}
function bgTwo() {
    background("#3eade9ff");
    wave(300, 0.002, "#3194d2ff", 1);
    wave(600, 0.002, "#0099f9ff", 2);
    wave(900, 0.002, "#237ab0ff", 3);
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

//function that displays the title screen
function showTitleScreen() {

    background("#0d2431ff");
    wave(300, 0.002, "#071c29ff", 1);
    wave(600, 0.002, "#0c1b25ff", 2);
    wave(900, 0.002, "#030f17ff", 3);

    push();
    textSize(30)
    fill('white');
    drawingContext.shadowBlur = 50; // Adjust for desired blurriness
    drawingContext.shadowColor = color(255, 255, 255);
    text("🐸Frog diving 🐸", 300, 150)
    pop()

    push()
    textSize(20)
    fill('white');
    drawingContext.shadowBlur = 50; // Adjust for desired blurriness
    drawingContext.shadowColor = color(255, 255, 255);
    text("Dive deep into the ocean by catching flies,", 250, 300)
    text("to find the treasure mine!", 300, 330)
    text("Press any key to start", 300, 400)
    pop();

    if (keyIsPressed) {
        gameState = "maingame"
    }
}

















