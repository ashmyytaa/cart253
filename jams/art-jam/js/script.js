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
    strokeWeight(3);
    arc(580, 260, 90, 80, PI + TWO_PI, TWO_PI); //left eye
    pop();

    push();
    noFill();
    stroke('black');
    strokeWeight(3);
    arc(420, 260, 90, 80, PI + TWO_PI, TWO_PI); //right  eye
    pop();

    //NOSE
    push();
    noFill();
    stroke('black');
    strokeWeight(3);
    arc(500, 300, 10, 80, 0, PI + QUARTER_PI, OPEN);
    pop();

    //mouth
    push();
    noFill();
    stroke(181, 33, 89);
    strokeWeight(3);
    arc(500, 380, 130, 150, 0, PI + TWO_PI, OPEN);
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
    fill(184, 15, 94);
    noStroke();
    strokeWeight(1);
    ellipse(600, 320, 70)
    pop();

    //cheeks - left
    push();
    fill(184, 15, 94);
    noStroke();
    strokeWeight(1);
    ellipse(400, 320, 70)
    pop();










    //doing the hair, which consists of multiple circles that overlap eachother
    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(370, 100, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(470, 100, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(570, 100, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(630, 100, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(630, 50, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(330, 50, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(430, 50, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(530, 50, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(530, 30, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(300, 150, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(700, 150, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(700, 100, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(270, 200, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(750, 200, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(750, 270, 150, 90);
    pop();

    push();
    fill(97, 56, 30);
    noStroke();
    ellipse(250, 270, 150, 90);
    pop();







}