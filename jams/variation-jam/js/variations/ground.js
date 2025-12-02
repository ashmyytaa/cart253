
let houseOne;
let houseTwo;
let cloud = 0;


let xGround = [];
let yGround = [];
let xGround1 = [];
let yGround1 = [];
let xGround2 = [];
let yGround2 = [];
let vGroundx = [];
let vGroundy = [];
let groundBg = [122, 192, 230]; // default sky color




/**
 * Function preload() that loads my images
 */
function preloadGround() {

    houseOne = loadImage('assets/images/houseOne.png');
    houseTwo = loadImage('assets/images/houseTwo.png');

}


function groundSetup() {
    for (let i = 0; i < 50; i++) {

        xGround[i] = random(0, width);
        yGround[i] = random(0, height);
        xGround1[i] = random(0, width);
        yGround1[i] = random(0, height);
        xGround2[i] = random(0, width);
        yGround2[i] = random(0, height);

        // Random speed
        vGroundx[i] = random(-2, 2);
        vGroundy[i] = random(-2, 2);
    }

}

/**
 * This will be called every frame when the blue variation is active
 */
function groundDraw() {
    background(groundBg);

    ground();
    groundObjects();
    movingClouds();

    drawFlower(50, 450);
    drawFlower(200, 410);
    drawFlower(300, 430);
    drawFlower(400, 470);
    drawFlower(500, 550);
    drawFlower(600, 420);
    drawFlower(700, 450);
    drawFlower(800, 500);
    drawFlower(900, 530);
    drawFlower(1000, 440);


    drawFlower(45, 580);
    drawFlower(100, 530);
    drawFlower(110, 420);
    drawFlower(130, 470);
    drawFlower(170, 460);
    drawFlower(210, 450);
    drawFlower(600, 570);
    drawFlower(800, 450);
    drawFlower(1100, 570);
    drawFlower(1150, 440);



    butterflies();
}

/**
 * This will be called whenever a key is pressed while the blue variation is active
 */
function groundKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function groundMousePressed() {
    groundBg = [73, 78, 163];

}

function ground() {

    push();
    fill(88, 166, 102);
    noStroke();
    rect(0, 400, width, 200)
    pop();
}

function butterflies() {
    for (let i = 0; i < 10; i++) {

        xGround[i] += vGroundx[i];
        yGround[i] += vGroundy[i];

        if (xGround[i] < 0 || xGround[i] > width) vGroundx[i] *= -1;
        if (yGround[i] < 0 || yGround[i] > height) vGroundy[i] *= -1;


        //lower wings
        push();
        translate(xGround[i], yGround[i]);
        noStroke();
        fill(206, 80, 235);
        ellipse(-15, -10, 25, 20); // left upper
        ellipse(15, -10, 25, 20);  // right upper
        pop();

        //upper wings
        push();
        translate(xGround[i], yGround[i]);
        noStroke();
        fill(206, 80, 235);
        ellipse(-15, 10, 25, 20); // left lower
        ellipse(15, 10, 25, 20);  // right lower
        pop();

        //body
        push();
        translate(xGround[i], yGround[i]);
        noStroke();
        fill(66, 46, 34);
        rect(-1, -10, 5, 35, 20);
        pop();

        //antenna
        push();
        translate(xGround[i], yGround[i]);
        stroke(66, 46, 34);
        strokeWeight(1);
        line(0, -10, -15, -15);
        line(0, -10, 15, -15);
        pop();
    }
}

//function ground objects
function groundObjects() {
    push();
    noStroke();
    fill(235, 192, 5);
    ellipse(130, 100, 150)
    pop();


    image(houseOne, 150, 200, 200, 200);
    image(houseTwo, 350, 200, 200, 200);

}


function movingClouds() {
    drawCloud(cloud, 50, 110);
    drawCloud(cloud + 200, 150, 100);
    drawCloud(cloud - 200, 200, 90);


    cloud += 1;
    if (cloud > width + 200) cloud = -300;
}

//function draw cloud that draws my clouds
function drawCloud(xCloud, yCloud, sizeCloud) {

    //drawing the top cloud   
    push();
    noStroke();
    fill(255);
    ellipse(xCloud, yCloud, sizeCloud * 0.9, sizeCloud * 0.7);
    pop();

    //drawing the left cloud
    push();
    noStroke();
    fill(255);
    ellipse(xCloud - sizeCloud * 0.5, yCloud + sizeCloud * 0.2, sizeCloud * 0.7, sizeCloud * 0.5);
    pop();

    //drawing the right cloud
    push();
    noStroke();
    fill(255);
    ellipse(xCloud + sizeCloud * 0.5, yCloud + sizeCloud * 0.2, sizeCloud * 0.7, sizeCloud * 0.5);
    pop();

}

function drawFlower(x, y, size = 1) {
    push();
    translate(x, y);

    let petalCount = 5;
    let petalDistance = 10 * size;
    let petalSize = 15 * size;
    let centerSize = 15 * size;


    noStroke();
    fill(70, 188, 242);
    for (let i = 0; i < petalCount; i++) {
        let angle = (TWO_PI / petalCount) * i;
        let petalX = cos(angle) * petalDistance;
        let petalY = sin(angle) * petalDistance;
        ellipse(petalX, petalY, petalSize);
    }

    // Draw center
    fill(255, 230, 90); // yellow
    ellipse(0, 0, centerSize);

    pop();
}