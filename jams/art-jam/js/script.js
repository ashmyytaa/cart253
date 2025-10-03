/**
 * ART JAM
 * Ashmitha Kanagiah
 * 
 * Smiling Lady
 * Smiling lady is a portrait of a cute lady who is smiling her way through life, she looks
 * relaxed and radiates positive energy. The user is able to interact with the portrait by using
 * the mouse. When the user presses the mouse, the hair color of the portrait changes. Also, when the
 * user's mouse overlaps the portraits's cheeks, the cheeks changes colors as well. Other animations that
 * are included are the bow button on the bows of my portrait that changes size as well as the
 * background that displays bubbles at random positions on the canvas. 
 */

"use strict";

//variable declaration:
const head = { //head variable
    fill: "#c28744ff",
    x: 500,
    y: 290,
    size: 425,
}

let ears = { //ears variable
    x1: 290,
    y1: 265,
    x2: 710,
    y2: 265,
    fill: "#c28744ff",
    size: 60,
};

let cheeks = { //cheeks variable
    x1: 600,
    y1: 320,
    size: 110,
    x2: 400,
    y2: 320,
    fill: "#c216612d",

    fills: {
        blush: "#7d121261",
        happy: "#c216612d",
    }
};

let hair = { //hair variable
    fill: "#442c10ff",
    size: 200,

    left: {
        x: 250,
        y: 130,
    },

    right: {
        x: 750,
        y: 130,
    },

    fills: {
        lightBrown: "#724501ff",
        brown: "#3b1f01ff",
    },
};


let bowDetail = { //variable for the details for my bows
    stroke: "#133246ff",
    size: 40,
    bowMinSize: 30,
    bowMaxSize: 80,

    fill: {
        r: 100,
        g: 106,
        b: 200,
    }
}

let bubbles = { //variable for the bubbles that are on the background
    x: undefined,
    y: undefined,
    fill: "#84d2ff09",
    size: 50,
};

let earrings = { //earrings variable
    fill: "#efc907ff",
    size: 15,
};


/**
 * Creation of my canvas size as well as the background color of my canvas, where my portait will be displayed.
*/
function setup() {
    createCanvas(1000, 600);
    background("#133246ff");
}


/**
 * The draw functions draws the shapes that compose my portait. It also contains the functions that I
 * have created, for them to be called in the draw function. Those functions that I have created are for
 * the purpose of creating interactions and animations with my project.
*/
function draw() {

    //function calling:
    blushing();  //function where when the user hovers their mouse over the portrait's cheeks, the cheeks change color
    hairChange();  //function where when the user presses the mouse anywhere on the canvas, the hair color of the portait changes
    bubblesBackground();  //function where bubbles are filling up the background of my canvas, at random positions and at a slow pace
    hairBowChange();  //function that increses and decreses the size of the bow buttons on the bows


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
    arc(410, 260, 110, 70, PI + TWO_PI, TWO_PI); //using arc to create a closed eyelid
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
    strokeWeight(5);
    arc(500, 380, 100, 90, 0, PI + TWO_PI, OPEN); //using arc again to create a smile 
    pop();

    //eyebrows - right side
    push();
    noFill();
    stroke(74, 33, 24);
    strokeWeight(3);
    arc(580, 200, 50, 20, PI + TWO_PI, TWO_PI); //using arc to create my eyebrows
    pop();
    //eyebrows - left side
    push();
    noFill();
    stroke(74, 33, 24);
    strokeWeight(3);
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

    //ears - left side
    push();
    fill(ears.fill);
    noStroke();
    ellipse(ears.x1, ears.y1, ears.size);
    pop();
    //ears - right side
    push();
    fill(ears.fill);
    noStroke();
    ellipse(ears.x2, ears.y2, ears.size);
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
    //hair front side
    push();
    fill(hair.fill);
    noStroke();
    strokeWeight(1);
    arc(500, 150, 350, 250, PI + TWO_PI, TWO_PI); //using a filled arc to do an half ellipse to draw the front of the hair of my portrait
    pop();

    //hair bows - left side
    push();  //bottom left triangle
    fill(bowDetail.fill.r, bowDetail.fill.g, bowDetail.fill.b);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    triangle(190, 240, 320, 170, 250, 300
    );
    pop();
    //top left triangle
    push();
    fill(bowDetail.fill.r, bowDetail.fill.g, bowDetail.fill.b);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    triangle(300, 180, 380, 80, 430, 140);
    pop();
    //left bow buttom
    push();
    fill(bowDetail.fill.r, bowDetail.fill.g, bowDetail.fill.b);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    ellipse(300, 185, bowDetail.size);
    pop();

    //hair bows - right side
    push();  //top right triangle
    fill(bowDetail.fill.r, bowDetail.fill.g, bowDetail.fill.b);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    triangle(700, 190, 630, 80, 550, 110);  //using triangle to create the wings of my bows
    pop();
    //bottom right triangle
    push();
    fill(bowDetail.fill.r, bowDetail.fill.g, bowDetail.fill.b);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    triangle(690, 180, 750, 300, 800, 250);  //using triangle to create the wings of my bows
    pop();
    //right bow button
    push();
    fill(bowDetail.fill.r, bowDetail.fill.g, bowDetail.fill.b);
    stroke(bowDetail.stroke);
    strokeWeight(1.5);
    ellipse(700, 185, bowDetail.size);
    pop();


    //Fomula that changes the fill color of my bows, to achieve a dark blue shade.
    //Only decreasing the fill for the red and green color, since I want to achieve a vibrant dark blue shade
    bowDetail.fill.g = bowDetail.fill.g - 0.255;
    bowDetail.fill.r = bowDetail.fill.r - 0.255;


    //earrings - left side
    push();
    fill(earrings.fill);
    noStroke();
    ellipse(285, 300, earrings.size);
    pop();
    //earrings - right side
    push();
    fill(earrings.fill);
    noStroke();
    ellipse(713, 300, earrings.size);
    pop();

}

//function where when the mouse overlaps cheeks, it changes the cheeks color
function blushing() {

    //calculating the distance between the mouse and the cheeks, for the right side and left side
    const distanceOne = dist(mouseX, mouseY, cheeks.x1, cheeks.y1);
    const distanceTwo = dist(mouseX, mouseY, cheeks.x2, cheeks.y2);
    //calculates when the mouse is inside the cheeks by seeing if the mouse's position is on the radius of the cheeks
    const mouseOverlapping = (distanceOne < cheeks.size / 2 || distanceTwo < cheeks.size / 2);
    //conditional statement where it checks if the mouse is overlapping/inside the cheeks
    if (mouseOverlapping) {
        cheeks.fill = cheeks.fills.blush; //changes colors if the mouse overlaps the cheeks
    }
    else {
        cheeks.fill = cheeks.fills.happy; //remain a default colour when the mouse is not overlappnig the cheeks
    }

}


//function where it checks whether the mouse is being pressed in the canvas, and if so, it changes the hair color
function hairChange() {
    if (mouseIsPressed) { //using mouseIsPressed event
        hair.fill = hair.fills.lightBrown;
    }
    else {
        hair.fill = hair.fills.brown; //keeps the default brown hair color when the mouse is not being pressed
    }
}


//function where it creates the circles to mimick bubbles at random positions, for it to be displayed onto the background
function bubblesBackground() {

    //conditional to check the remainder. to check if 60 frames have passed, which equals to one second
    if (frameCount % 60 === 0) {
        bubbles.x = random(0, width); //will display a bubble at a random position every 60 frames (every second)
        bubbles.y = random(0, height); //random values will be generated for the x and y positions for each of my bubbles
    }

    push(); //  creation of my bubbles
    noFill();
    stroke(bubbles.fill);
    strokeWeight(3);
    ellipse(bubbles.x, bubbles.y, bubbles.size);
    pop();

}


//function where the size of the bow button changes, gets bigger
function hairBowChange() {
    bowDetail.size += 0.1;
    bowDetail.size = constrain(bowDetail.size, bowDetail.bowMinSize, bowDetail.bowMaxSize); // using contrain so that it eventually stops getting bigger
}