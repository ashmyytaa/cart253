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


    //hair - right
    push();
    fill(66, 46, 34);
    noStroke();
    strokeWeight(1);
    ellipse(770, 130, 200)
    pop();
    //hair - left
    push();
    fill(66, 46, 34);
    noStroke();
    strokeWeight(1);
    ellipse(230, 130, 200) //left
    pop();


    //hairr front bangs
    push();
    fill(66, 46, 34);
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