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
    x1: 0,
    x2: 1000,
    x3: 0,
    y1: 100,
    y2: 300,
    y3: 500,
    fill: "#84d2ff13",
    size: 50,
};

let hairAccessory = {
    fill: "#ffffffff",
    size: 10,
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

    //function calling:

    //function where the user hovers their mouse over the portrait's cheeks, they change color
    blushing();
    //function where when the user presses the mouse anywhere on the canvas, the hair color of the portait changes
    hairChange();
    //function where transparent circles mimicking bubbles fills up the canvas until it turns the canvas into another color
    bubblesBackground();


    //head - shape of an ellipse
    push();
    fill(head.fill);
    noStroke();
    ellipse(head.x, head.y, head.size);
    pop();

    //eyes - left side
    push();
    noFill();
    stroke('black');
    strokeWeight(2);
    arc(600, 260, 110, 70, PI + TWO_PI, TWO_PI); //using arc to create a closed eyelid
    pop();
    // eyes - right side 
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


    //eyebrows - right side
    push();
    noFill();
    stroke(74, 33, 24);
    strokeWeight(1);
    arc(580, 200, 50, 20, PI + TWO_PI, TWO_PI); //using arc to create my eyebrows
    pop();
    //eyebrows - left side
    push();
    noFill();
    stroke(74, 33, 24);
    strokeWeight(1);
    arc(420, 200, 50, 20, PI + TWO_PI, TWO_PI); //using arc to create my eyebrows
    pop();

    //cheeks - right side
    push();
    fill(cheeks.fill);
    noStroke();
    strokeWeight(1);
    ellipse(cheeks.x1, cheeks.y1, cheeks.size)
    pop();
    //cheeks - left side
    push();
    fill(cheeks.fill);
    noStroke();
    strokeWeight(1);
    ellipse(cheeks.x2, cheeks.y2, cheeks.size)
    pop();


    //hair - right side
    push();
    fill(hair.fill);
    noStroke();
    strokeWeight(1);
    ellipse(hair.right.x, hair.right.y, hair.size)
    pop();
    //hair - left side
    push();
    fill(hair.fill);
    noStroke();
    strokeWeight(1);
    ellipse(hair.left.x, hair.left.y, hair.size)
    pop();
    //hairr front side
    push();
    fill(hair.fill);
    noStroke();
    strokeWeight(1);
    arc(500, 150, 350, 250, PI + TWO_PI, TWO_PI); // using a filled arc to do like an half ellipse for my front bangs
    pop();

    //hair bows - left side

    //bottom  left triangle
    push();
    fill(bowDetail.fill);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    triangle(190, 240, 320, 170, 250, 300
    );
    pop();
    //top left triangle
    push();
    fill(bowDetail.fill);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    triangle(300, 180, 380, 80, 430, 140);
    pop();
    //left bow buttom
    push();
    fill(bowDetail.fill);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    ellipse(300, 185, 60);
    pop();


    //hair bows - right side

    //top right triangle
    push();
    fill(bowDetail.fill);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    triangle(700, 190, 630, 80, 550, 110);
    pop();
    //bottom right triangle
    push();
    fill(bowDetail.fill);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    triangle(690, 180, 750, 300, 800, 250);
    pop();
    //right bow button
    push();
    fill(bowDetail.fill);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    ellipse(700, 185, 60);
    pop();



    //creating the hair accesories - left side
    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(140, 100, hairAccessory.size);
    pop();

    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(155, 98, hairAccessory.size);
    pop();


    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(170, 90, hairAccessory.size);
    pop();

    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(185, 80, hairAccessory.size);
    pop();

    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(199, 69, hairAccessory.size);
    pop();

    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(210, 55, hairAccessory.size);
    pop();

    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(220, 40, hairAccessory.size);
    pop();

    //hair accesories - right side
    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(750, 40, hairAccessory.size);
    pop();

    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(753, 50, hairAccessory.size);
    pop();

    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(760, 60, hairAccessory.size);
    pop();

    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(770, 70, hairAccessory.size);
    pop();

    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(785, 75, hairAccessory.size);
    pop();

    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(800, 78, hairAccessory.size);
    pop();


    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(818, 79, hairAccessory.size);
    pop();

    push();
    fill(hairAccessory.fill);
    noStroke();
    ellipse(835, 75, hairAccessory.size);
    pop();













}

//function that when the mouse overlaps cheeks, it changes the cheeks color
function blushing() {

    //calculating the distance between the mouth and the cheeks, for it right side and left side
    const distanceOne = dist(mouseX, mouseY, cheeks.x1, cheeks.y1);
    const distanceTwo = dist(mouseX, mouseY, cheeks.x2, cheeks.y2);
    //calculates when the mouse is inside the cheeks by seeing if the mouse position is on the radius of the cheeks
    const mouseOverlapping = (distanceOne < cheeks.size / 2 || distanceTwo < cheeks.size / 2);
    //conditional statement where is checks if the mouse is overlapping/inside the cheeks
    if (mouseOverlapping) {
        cheeks.fill = cheeks.fills.blush; //changes colors if the mouse overlaps the cheeks
    }
    else {
        cheeks.fill = cheeks.fills.happy; //remain a default colour when the mouse is not overlappnig the cheeks
    }

}


//function where it checks whether the mouse is being pressed in the canvas, and if so it changes the hair color
function hairChange() {
    if (mouseIsPressed) { //using mouseIsPressed event
        hair.fill = hair.fills.pink;
    }
    else {
        hair.fill = hair.fills.brown; //keeps the default brown hair color when the mouse is not being pressed
    }
}

//function where it creates the circles to mimick bubbles, for it to be projected onto the backgorund
function bubblesBackground() {

    push();
    fill(bubbles.fill);
    strokeWeight(0.5);
    let x1 = random(1000);
    let y1 = random(600);
    // point(x1, y1);
    ellipse(x1, y1, bubbles.size);
    pop();




}

function hairBowChange() {

}