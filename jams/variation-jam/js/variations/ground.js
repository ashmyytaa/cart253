/**
 * This is my ground.js file that contains all the drawing + animation dedicated to the ground
 * variation. Its functions will be called in the script.js and menu.js to ensure a well functionning
 * variation menu.
 */

/**
 * Variable declarations
 */
let houseOne; //variable to store my houseOne image
let houseTwo; //variable to store my houseTwo image
let cloud = 0; //variable to store and handle my clouds

//empty arrays for my butterflies
let xGround = [];
let yGround = [];
let vGroundx = [];
let vGroundy = [];

//empty rain array + false default operator for raining 
let rain = [];
let raining = false;

let bg = [122, 192, 230]; // default background color
let groundFill = [88, 166, 102]; // default ground color

/**
 * Function preload() that loads my images
 */
function preloadGround() {
    houseOne = loadImage('assets/images/houseOne.png');
    houseTwo = loadImage('assets/images/houseTwo.png');
}

/**
 * Function groundSetup() for my ground variation that gets called once
 */
function groundSetup() {

    //for loop that generates random positions for the width and height for my butterflies as well as it speed
    for (let i = 0; i < 50; i++) {

        xGround[i] = random(0, width); //butterflies x and y positions will be taking the entire space of the canvas randomly
        yGround[i] = random(0, height);

        vGroundx[i] = random(-2, 2); //speed of butterlies will move in a range of -2 and 2 randomly
        vGroundy[i] = random(-2, 2);
    }

    //for loop that generates random positions for the width and height for my rainDrops function
    for (let i = 0; i < 150; i++) {
        //adds the rain property into our empty array
        rain.push({
            x: random(width), //anywhere on the canvas in regard of the x-axis
            y: random(-600, 0) //anywhere in height, but starts above the canvas so that my raindrops can fall smoothly
        });
    }

}

/**
 * Function groundDraw() for my ground variation that draws my shapes and initializes functions
 */
function groundDraw() {

    background(bg); //background for my canvas

    //Calls the functions ground(), groundObjects(),movingClouds()
    ground();
    groundObjects();
    movingClouds();

    //Calls the drawFlower() function, where I chose my own parameters for the x and y positions
    drawFlower(640, 500);
    drawFlower(240, 540);
    drawFlower(940, 560);
    drawFlower(100, 420);
    drawFlower(440, 450);
    drawFlower(800, 470);
    drawFlower(550, 550);
    drawFlower(1150, 540);
    drawFlower(1000, 450);
    drawFlower(700, 560);
    drawFlower(400, 560);
    drawFlower(310, 440);
    drawFlower(60, 520);
    drawFlower(170, 470);

    //Calls the butterflies() function
    butterflies();

    //calls the raining function once the condition goes from false to true, and that will happen when the user presses on the "r" or "R"
    //key on the keyboard
    if (raining) {
        rainDrops();
    }
}

/**
 * This will be called whenever a key is pressed while the ground variation is active
 */
function groundKeyPressed(event) {
    if (event.keyCode === 27) { //key 27 = esc key, which will take the user back to the menu screen
        state = "menu";
    }

    if (event.keyCode === 82) { //key 82 = "r" or "R" key, which means when the user presses on r, the raining function will be called
        raining = true;
    }
}

/**
 * This will be called whenever the mouse is pressed while the ground variation is active
 */
function groundMousePressed() {
    bg = [219, 149, 171]; //bg changes color when mouse is pressed
    groundFill = [145, 102, 86]; //ground changes color when mouse is pressed

}

/**
 * Function ground that draws the ground in my canvas, to separate the sky from the ground
 */
function ground() {
    push();
    fill(groundFill);
    noStroke();
    rect(0, 400, width, 200)
    pop();
}

/**
 * Function butterflies that draws butterflies and moves in randomly on the canvas and bounces
 * of the canvas when it touches the edges of the canvas.
 */
function butterflies() {
    //for loop that draws 10 butterflies in the canvas
    for (let i = 0; i < 10; i++) {

        //adds speed to the x and y positions of our butterlies
        xGround[i] += vGroundx[i];
        yGround[i] += vGroundy[i];

        //bounces the butterflies of a speed of -2 when it touches the edges of the canvas, either on the width or height
        if (xGround[i] < 0 || xGround[i] > width) {
            vGroundx[i] *= -1;
        }
        if (yGround[i] < 0 || yGround[i] > height) {
            vGroundy[i] *= -1;
        }

        //draws lower wings of butterflies
        push();
        translate(xGround[i], yGround[i]);
        noStroke();
        fill(206, 80, 235);
        ellipse(-15, -10, 25, 20); // left upper
        ellipse(15, -10, 25, 20);  // right upper
        pop();

        //draws upper wings of butterflies
        push();
        translate(xGround[i], yGround[i]);
        noStroke();
        fill(206, 80, 235);
        ellipse(-15, 10, 25, 20); // left lower
        ellipse(15, 10, 25, 20);  // right lower
        pop();

        //draws body of butterflies
        push();
        translate(xGround[i], yGround[i]);
        noStroke();
        fill(66, 46, 34);
        rect(-1, -10, 5, 35, 20);
        pop();

        //draws antella of butterflies
        push();
        translate(xGround[i], yGround[i]);
        stroke(66, 46, 34);
        strokeWeight(1);
        line(0, -10, -15, -15);
        line(0, -10, 15, -15);
        pop();
    }
}

/**
 * Function groundObjects() that draws other shapes on the canvas
 */
function groundObjects() {

    //draws a sun
    push();
    noStroke();
    fill(235, 192, 5);
    ellipse(130, 100, 150)
    pop();

    //adds our images that we preloaded
    image(houseOne, 150, 200, 200, 200);
    image(houseTwo, 350, 200, 200, 200);

}

/**
 * Function movingClouds() that moves clouds horizontaly on the x-axis from left to right and when it goes off the canvas
 * on the right side, it stars back at 0
 */
function movingClouds() {

    //draws our clouds which is composed of 3 ellipses and I drew 3 clouds
    drawCloud(cloud, 50, 110); //middles cloud
    drawCloud(cloud + 200, 150, 100); //right cloud
    drawCloud(cloud - 200, 200, 90); //left cloud


    cloud += 1; //moves by 1 on the x-axis
    if (cloud > width + 200) cloud = -300; //resets the clouds back on the left side when it reaches the end on the right side
}

/**
 *Function drawCloud() that draws my clouds and has parameters, because I want to be able to set its properties regarding positions and size
 */
function drawCloud(xCloud, yCloud, sizeCloud) {

    //draws the top cloud   
    push();
    noStroke();
    fill(255);
    ellipse(xCloud, yCloud, sizeCloud * 0.9, sizeCloud * 0.7);
    pop();

    //draws the left cloud
    push();
    noStroke();
    fill(255);
    ellipse(xCloud - sizeCloud * 0.5, yCloud + sizeCloud * 0.2, sizeCloud * 0.7, sizeCloud * 0.5);
    pop();

    //draws the right cloud
    push();
    noStroke();
    fill(255);
    ellipse(xCloud + sizeCloud * 0.5, yCloud + sizeCloud * 0.2, sizeCloud * 0.7, sizeCloud * 0.5);
    pop();

}

/**
 *Function drawFlower that draws flowers on the canvas, for aesthetics 
 */
function drawFlower(x, y) {

    push();
    translate(x, y);
    let petalCount = 5; //number of petals the flower has
    let petalDistance = 10; //distance between the petals and the center
    let petalSize = 15; //petal size
    let centerSize = 15; //center size

    noStroke();
    fill(70, 188, 242);

    //for loop that draws the petals of the flower in a circle that rounds the the center ellipse
    for (let i = 0; i < petalCount; i++) {
        let angle = (TWO_PI / petalCount) * i; //using TW0_PI for the petals to go on a 360 motion
        let petalX = cos(angle) * petalDistance; //adds the petals on the x-axis, stretching from the center ellipse
        let petalY = sin(angle) * petalDistance; //adds the petals on the y-axis, stretching from the center ellipse
        ellipse(petalX, petalY, petalSize); //draws the petals which are in the shape of ellipse
    }

    //draws the center of the flowers
    fill(255, 230, 90);
    ellipse(0, 0, centerSize); // 0 for x and y positions for it to be centered with the petals
    pop();
}


function rainDrops() {
    for (let drop of rain) {

        drop.y += 7;   //speed at which rate the raindrops will fall for my raining() function
        push();
        stroke(43, 49, 122);
        strokeWeight(2);
        line(drop.x, drop.y, drop.x, drop.y + 5);
        pop();

        if (drop.y > height) {
            drop.y = random(-100, 0); //resets the raindrops when that have reached the bottom of the canvas
        }
    }
}