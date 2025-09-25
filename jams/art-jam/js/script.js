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
    ellipse(500, 250, 450, 450);
    pop();

    //neck
    push();
    fill(194, 142, 58);
    noStroke();
    rect(460, 300, 100, 600);


    //left eyes
    push();
    fill('white');
    stroke('black');
    strokeWeight(0.5)
    ellipse(370, 200, 50, 30);
    pop();

    //right eyes
    push();
    fill('white');
    stroke('black');
    strokeWeight(0.5)
    ellipse(650, 200, 50, 30);
    pop();

    //left eye pupil
    push();
    fill('black');
    noStroke();
    ellipse(650, 200, 20, 20);
    pop();


    //right eye pupil
    push();
    fill('black');
    noStroke();
    ellipse(370, 200, 20, 20);
    pop();


    //nose
    push();
    fill(194, 142, 58);
    stroke(138, 96, 28);
    strokeWeight(0.3);
    rect(500, 250, 30, 60);
    pop();

    //noseOpening
    push();
    fill(194, 142, 58);
    noStroke();
    ellipse(515, 246, 30, 30)
    pop();

    //nostrils
    push();
    fill(168, 112, 44);
    stroke(138, 96, 28);
    strokeWeight(0.2);
    ellipse(500, 310, 30, 30)
    pop();

    //nostrils
    push();
    fill(168, 112, 44);
    stroke(138, 96, 28);
    strokeWeight(0.2);
    ellipse(530, 310, 30, 30)
    pop();

    //mouth
    push();
    fill(166, 48, 77);
    stroke(166, 48, 77);
    strokeWeight(3);
    //used arc() to create an open arc which i am going to use to do my mouth.
    arc(500, 375, 150, 50, 0, PI + QUARTER_PI, OPEN);
    pop();


    //cheeks




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