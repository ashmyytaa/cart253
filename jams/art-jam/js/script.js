/**
 * ART JAM
 * Ashmitha Kanagiah
 * 
 * Self Portrait.
 * I did a simple portait of a girl. There are mutiple animations that compose my portrait such as: 
 */

"use strict";

const head = {
    fill: "#c28744ff",
    x: 500,
    y: 290,
    size: 430,
}

let cheeks = {
    x1: 600,
    y1: 320,
    size: 90,
    x2: 400,
    y2: 320,
    fill: "#c216612d",

    fills: {
        blush: "#7d121261",
        happy: "#c216612d",
    }
};

let hair = {
    fill: "#442c10ff",
    size: 200,

    left: {
        x: 230,
        y: 130,
    },

    right: {
        x: 770,
        y: 130,
    },

    fills: {
        pink: "#f46cc0fd",
        brown: "#32210fff",
    },


};


let bowDetail = {
    fill: "#368dc4ff",
    stroke: "#133246ff",
}

let bubbles = {
    x: undefined,
    y: undefined,
    fill: "#d5dee31b",
    size: 50,
};


/**
 * Creates the background color of my canvas, where my portait will be displayed.
*/
function setup() {
    createCanvas(1000, 600);
    background("#133246ff");
}


/**
 * The draw functions draws the shapes of my portrait.
*/
function draw() {

    blushing();
    hairChange();
    bubblesBackground();







    //head - which is in a ellipse shape
    push();
    fill(head.fill);
    noStroke();
    ellipse(head.x, head.y, head.size);
    pop();

    //eyes - left 
    push();
    noFill();
    stroke('black');
    strokeWeight(2);
    arc(600, 260, 110, 70, PI + TWO_PI, TWO_PI); //using arc to create a closed lid eye 
    pop();
    // eyes - right 
    push();
    noFill();
    stroke('black');
    strokeWeight(2);
    arc(410, 260, 110, 70, PI + TWO_PI, TWO_PI); //using arc to create a closed lid eye 
    pop();

    //nose
    push();
    noFill();
    stroke('black');
    strokeWeight(2);
    arc(500, 300, 20, 50, 0, PI + QUARTER_PI, OPEN); //using arc to create my nose shape 
    pop();

    //mouth
    push();
    noFill();
    stroke(128, 22, 60, 200);
    strokeWeight(3);
    arc(500, 380, 100, 90, 0, PI + TWO_PI, OPEN); //using arc again to create a smile 
    pop();


    //eyebrows - right
    push();
    noFill();
    stroke(74, 33, 24);
    strokeWeight(1);
    arc(580, 200, 50, 20, PI + TWO_PI, TWO_PI); //using arc to create my eyebrows
    pop();
    //eyebrows - left
    push();
    noFill();
    stroke(74, 33, 24);
    strokeWeight(1);
    arc(420, 200, 50, 20, PI + TWO_PI, TWO_PI); //using arc to create my eyebrows
    pop();

    //cheeks - right
    push();
    fill(cheeks.fill);
    noStroke();
    strokeWeight(1);
    ellipse(cheeks.x1, cheeks.y1, cheeks.size)
    pop();
    //cheeks - left
    push();
    fill(cheeks.fill);
    noStroke();
    strokeWeight(1);
    ellipse(cheeks.x2, cheeks.y2, cheeks.size)
    pop();


    //hair - right
    push();
    fill(hair.fill);
    noStroke();
    strokeWeight(1);
    ellipse(hair.right.x, hair.right.y, hair.size)
    pop();

    //hair - left
    push();
    fill(hair.fill);
    noStroke();
    strokeWeight(1);
    ellipse(hair.left.x, hair.left.y, hair.size)
    pop();

    //hairr front bangs
    push();
    fill(hair.fill);
    noStroke();
    strokeWeight(1);
    arc(500, 150, 350, 250, PI + TWO_PI, TWO_PI); // using a filled arc to do like an half ellipse for my front bangs
    pop();

    //hair bows - left 
    //bottom bow triangle
    push();
    fill(bowDetail.fill);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    triangle(190, 240, 320, 170, 250, 300
    );
    pop();
    //top bow triangle
    push();
    fill(bowDetail.fill);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    triangle(300, 180, 380, 80, 430, 140);
    pop();
    //bow button
    push();
    fill(bowDetail.fill);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    ellipse(300, 185, 60);
    pop();


    //hair bows - right  
    //top bow triangle
    push();
    fill(bowDetail.fill);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    triangle(700, 190, 630, 80, 550, 110);
    pop();
    //bottom bow triangle
    push();
    fill(bowDetail.fill);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    triangle(690, 180, 750, 300, 800, 250);
    pop();
    //bow button
    push();
    fill(bowDetail.fill);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    ellipse(700, 185, 60);
    pop();





}

function blushing() {
    const distanceOne = dist(mouseX, mouseY, cheeks.x1, cheeks.y1);
    const distanceTwo = dist(mouseX, mouseY, cheeks.x2, cheeks.y2);

    const mouseOverlapping = (distanceOne < cheeks.size / 2 || distanceTwo < cheeks.size / 2);
    if (mouseOverlapping) {
        cheeks.fill = cheeks.fills.blush;
    }
    else {
        cheeks.fill = cheeks.fills.happy;
    }

}



function hairChange() {
    if (mouseIsPressed) {
        hair.fill = hair.fills.pink;
    }
    else {
        hair.fill = hair.fills.brown;
    }
}

function bubblesBackground() {

    push();
    frameRate = 2;
    fill(bubbles.fill);
    noStroke();
    bubbles.x = random(0, width);
    bubbles.y = random(0, height);
    ellipse(bubbles.x, bubbles.y, bubbles.size);

    pop();




}