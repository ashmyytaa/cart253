/**
 * ART JAM
 * Ashmitha Kanagiah
 * 
 * Self Portrait.
 * I did a simple portait of a girl. There are mutiple animations that compose my portrait such as: 
 */

"use strict";


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



    //head
    push();
    fill(194, 142, 58);
    noStroke();
    ellipse(500, 290, 430, 430);
    pop();

    //eyes
    push();
    noFill();
    stroke('black');
    strokeWeight(2);
    arc(580, 260, 90, 70, PI + TWO_PI, TWO_PI); //left eye
    pop();

    push();
    noFill();
    stroke('black');
    strokeWeight(2);
    arc(420, 260, 90, 70, PI + TWO_PI, TWO_PI); //right  eye
    pop();

    //nose
    push();
    noFill();
    stroke('black');
    strokeWeight(2);
    arc(500, 300, 20, 50, 0, PI + QUARTER_PI, OPEN);
    pop();

    //mouth
    push();
    noFill();
    stroke(181, 33, 89, 200);
    strokeWeight(3);
    arc(500, 380, 100, 90, 0, PI + TWO_PI, OPEN);
    pop();


    //eyebrows - left
    push();
    noFill();
    stroke(74, 33, 24);
    strokeWeight(1);
    arc(580, 200, 60, 20, PI + TWO_PI, TWO_PI);
    pop();


    //eyebrows - right
    push();
    noFill();
    stroke(74, 33, 24);
    strokeWeight(1);
    arc(420, 200, 60, 20, PI + TWO_PI, TWO_PI);
    pop();

    //cheeks - right
    push();
    fill(184, 15, 94, 20);
    noStroke();
    strokeWeight(1);
    ellipse(600, 320, 90)
    pop();

    //cheeks - left
    push();
    fill(184, 15, 94, 20);
    noStroke();
    strokeWeight(1);
    ellipse(400, 320, 90)
    pop();


    //hairr
    push();
    fill(66, 46, 34);
    noStroke();
    strokeWeight(1);
    ellipse(780, 130, 200)
    pop();

    push();
    fill(66, 46, 34);
    noStroke();
    strokeWeight(1);
    ellipse(220, 130, 200)
    pop();



    //hairr bangs
    push();
    fill(66, 46, 34);
    noStroke();
    strokeWeight(1);
    arc(500, 150, 350, 250, PI + TWO_PI, TWO_PI); //right  eye
    pop();

    //hair bows
    push();
    fill('brown');
    noStroke();
    strokeWeight(1);
    triangle(190, 240, 320, 170, 250, 300
    );
    pop();

    push();
    fill('brown');
    noStroke();
    strokeWeight(1);
    triangle(390, 140, 400, 70, 350, 100
    );
    pop();


















}