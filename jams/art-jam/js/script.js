/**
 * ART JAM
 * Ashmitha Kanagiah
 * 
 * Self Portrait
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 600);




}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(170, 66, 245);

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
    noStroke();
    ellipse(370, 200, 50, 30);
    pop();

    //right eyes
    push();
    fill('white');
    noStroke();
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
    strokeWeight(3);
    rect(500, 250, 30, 60);
    pop();

    //mouth
    push();
    fill(194, 142, 58);
    stroke(138, 96, 28);
    strokeWeight(3);
    arc(500, 300, 150, 200, 0, PI + QUARTER_PI, OPEN);
    pop();



}