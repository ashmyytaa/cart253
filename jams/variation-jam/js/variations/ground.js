
let houseOne;
let houseTwo;
let cloud = 0;


let xGround = [], yGround = [], xGround1 = [], yGround1 = [], xGround2 = [], yGround2 = [];
let vGroundx = [], vGroundy = [];

function preload() {

    houseOne = loadImage('assets/images/houseOne.png');
    houseTwo = loadImage('assets/images/houseTwo.png');
    ;
}
function groundSetup() {
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
 * This will be called every frame when the blue variation is active
 */
function groundDraw() {

    ground();

    groundObjects();
    movingClouds();
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
//function groundMousePressed() {

//}

function ground() {
    background(122, 192, 230)
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

