/**
 * ART JAM
 * Ashmitha Kanagiah
 * 
 * Self Portrait.
 * I did a simple portait of a girl. There are mutiple animations that compose my portrait such as: 
 */

"use strict";


let cheeks = {
    x1: 600,
    y1: 320,
    size: 90,
    x2: 400,
    y2: 320,
    fill: "#c216612d",
    fills: {
        blush: "#7d1212b3",
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

        pink: "#f46cc0e7",
        blonde: "#fbb15dd6",
    },


};






















//backgroun will have a default purple color
let backgroundShade = "170, 66, 245";

/**
 * Creates the background color of my canvas, where my portait will be displayed.
*/
function setup() {
    createCanvas(1000, 600);




}


/**
 * The draw functions draws the shapes of my portrait.
*/
function draw() {


    //frameRate of 3 because I want to use to to make my background 
    //change colors but at a relatively small pace.
    frameRate(3);

    //muticolor background
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    background(r, g, b);

    blushing();



    //head - which is in a ellipse shape
    push();
    fill(194, 142, 58);
    noStroke();
    ellipse(500, 290, 430, 430);
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
    stroke(181, 33, 89, 200);
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
    fill('brown');
    noStroke();
    strokeWeight(1);
    triangle(190, 240, 320, 170, 250, 300
    );
    pop();
    //top bow triangle
    push();
    fill('brown');
    noStroke();
    strokeWeight(1);
    triangle(300, 180, 380, 80, 430, 140);
    pop();
    //bow button
    push();
    fill('brown');
    noStroke();
    strokeWeight(1);
    ellipse(300, 185, 60);
    pop();


    //hair bows - right  
    //top bow triangle
    push();
    fill('brown');
    noStroke();
    strokeWeight(1);
    triangle(700, 190, 630, 80, 550, 110);
    pop();
    //bottom bow triangle
    push();
    fill('brown');
    noStroke();
    strokeWeight(1);
    triangle(690, 180, 750, 300, 800, 250);
    pop();
    //bow button
    push();
    fill('brown');
    noStroke();
    strokeWeight(1);
    ellipse(700, 185, 60);
    pop();





}

function blushing() {

    const distanceOne = dist(mouseX, mouseY, cheeks.x1, cheeks.y1);
    const distanceTwo = dist(mouseX, mouseY, cheeks.x2, cheeks.y2);

    const mouseIsOverlapping = (distanceOne < cheeks.size / 2 || distanceTwo < cheeks.size / 2);
    if (mouseIsOverlapping) {

        cheeks.fill = cheeks.fills.blush;
    }
    else {
        cheeks.fill = cheeks.fills.happy;
    }

}