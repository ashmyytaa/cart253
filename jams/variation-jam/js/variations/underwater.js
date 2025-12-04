/**
 * This is my underwater.js file that contains all the drawing + animation dedicated to the underwater
 * variation. Its functions will be called in the script.js and menu.js to ensure a well functionning
 * variation menu.
 */

/**
 * Variable declarations
 */
let coral; //variable to store my coral image
let algue; //variable to store my algue image
let blugue; //variable to store my blugue image (blue algue)
let angle = 0; // angle for my images because I will make them move in a certain angle.

//variables for my moving bubbles, that are undefined for now
let bubbleOne = undefined;
let bubbleTwo = undefined;
let bubbleThree = undefined;
let bubbleFour = undefined;
let bubbleFive = undefined;
let bubbleSix = undefined;
let bubbleSeven = undefined;
let bubbleEight = undefined;
let bubbleNine = undefined;
let bubbleTen = undefined;
let bubbleEleven = undefined;
let bubbleTwelve = undefined;

//variables for my fishes which are empty arrays for now
let x = [];
let y = [];
let vx = [];
let vy = [];

/**
 * Function preload() that loads my images
 */
function preloadUnderwater() {
    coral = loadImage('assets/images/coral.png');
    algue = loadImage('assets/images/algue.png');
    blugue = loadImage('assets/images/blugue.png');
}

/**
 * Function underwaterSetup() for my space variation that gets called once
 */
function underwaterSetup() {

    //for loop that generates random positions for the width and height for my fishes as well as it speed
    for (let i = 0; i < 50; i++) {
        x[i] = random(0, width); //fishes x and y positions will be taking the entire space of the canvas randomly
        y[i] = random(0, height);

        vx[i] = random(-2, 2);  //speed of fishes will move in a range of -2 and 2 randomly
        vy[i] = random(-2, 2);
    }

    //declaring all the properties for the positioning + size of my  bubbles because I want them
    //to be located in specific areas.
    bubbleOne = createBubble(100, 100, 100);
    bubbleTwo = createBubble(200, 200, 50);

    bubbleThree = createBubble(600, 300, 100);
    bubbleFour = createBubble(400, 550, 50);

    bubbleFive = createBubble(200, 350, 100);
    bubbleSix = createBubble(900, 550, 50);

    bubbleSeven = createBubble(1100, 100, 100);
    bubbleEight = createBubble(800, 200, 50);

    bubbleNine = createBubble(300, 100, 50);
    bubbleTen = createBubble(350, 400, 100);

    bubbleEleven = createBubble(1000, 500, 100);
    bubbleTwelve = createBubble(900, 300, 50);
}

/**
 * This will be called every frame when the underwater variation is active
 */
function underwaterDraw() {

    background("#0d2431ff"); //bg color

    underwater(); //calls the underwater() function which contains drawing od shapes + calling functions

    fishes(); //calls the fishes() function which is the animation of my fishes that are moving around my canvas

    //function updatebubble() and drawBubble() are called to draw and animate my bubbles
    updateBubble(bubbleOne);
    updateBubble(bubbleTwo);
    drawBubble(bubbleOne);
    drawBubble(bubbleTwo);

    updateBubble(bubbleThree);
    updateBubble(bubbleFour);
    drawBubble(bubbleThree);
    drawBubble(bubbleFour);

    updateBubble(bubbleFive);
    updateBubble(bubbleSix);
    drawBubble(bubbleFive);
    drawBubble(bubbleSix);

    updateBubble(bubbleSeven);
    updateBubble(bubbleEight);
    drawBubble(bubbleSeven);
    drawBubble(bubbleEight);

    updateBubble(bubbleNine);
    updateBubble(bubbleTen);
    drawBubble(bubbleNine);
    drawBubble(bubbleTen);

    updateBubble(bubbleEleven);
    updateBubble(bubbleTwelve);
    drawBubble(bubbleEleven);
    drawBubble(bubbleTwelve);


    coralpic(); //draws coralpic() function which loads and places all my images 
}

/**
 * This will be called whenever a key is pressed while the underwater variation is active
 */
function underwaterKeyPressed(event) {
    if (event.keyCode === 27) {  //key 27 = esc key, which will take the user back to the menu screen
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the underwater variation is active
 */
function underwaterMousePressed() {

}

/**
 * Function underwater() which draws + calls functions
 */
function underwater() {

    //calls the wave() function that adds waves to my background 
    wave(300, 0.002, "#071c29ff", 1);
    wave(600, 0.002, "#0c1b25ff", 2);
    wave(900, 0.002, "#030f17ff", 3);
}

/**
 * Function wave that I used in my mod-jam, that uses perlin noise to create waves, which is suitable for my underwater background compositions.
 * Code is derived from the perlin noise materials, from the p5.js reference website. 
 */
function wave(waveHeight, waveScale, waveColor, waveAddition) {
    let noiseLevel = waveHeight; // to determine how tall the wave will go
    let noiseScale = waveScale; // to determe how wavy it will be along the x-axis

    push(); // creates the wave
    fill(waveColor);
    noStroke();
    beginShape();
    for (let x = 0; x < width; x += waveAddition) { // checks along the x-axis to pick values to be added for the wave
        let scale = noiseScale * x;
        let move = noiseScale * frameCount; // framecount makes the wave move
        let y = noiseLevel * noise(scale, move);
        vertex(x, y);
    }
    vertex(width, height); // vertex is used to connect all the point to make up the wave
    vertex(0, height);
    endShape(CLOSE); // to close the shape between the two endpoints
    pop();
}

/**
 * Function fishes() that draws butterflies and moves in randomly on the canvas and bounces
 * of the canvas when it touches the edges of the canvas.
 */
function fishes() {

    //for loop that draws 20 fishes in the canvas
    for (let i = 0; i < 20; i++) {

        //adds speed to the x and y positions of our butterlies
        x[i] += vx[i];
        y[i] += vy[i];


        //bounces the butterflies of a speed of -1 when it touches the edges of the canvas, either on the width or height
        if (x[i] < 0 || x[i] > width) {
            vx[i] *= -1;

        }
        if (y[i] < 0 || y[i] > height) {
            vy[i] *= -1;
        }

        //draws the fish
        push();
        translate(x[i], y[i]);
        if (vx[i] < 0) {// flips/translates the fish vertically when it hits the edges of canvas (edges on the y axis)
            scale(-1, 1);
        }

        noStroke(); //fish head
        fill(113, 197, 227, 80);
        ellipse(0, 0, 30, 20);

        noStroke(); //fish tail
        fill(113, 197, 227, 80);
        triangle(0, 0, -30, -10, -30, 10);

        noStroke(); //fish eye
        fill(0, 80);
        ellipse(10, 2, 5, 5);
        pop();
    }
}


/**
 * Function coralpic() that positions my images as well as makes it move up and down to make it animating
 */
function coralpic() {
    angle += 0.05;

    image(algue, 150, 450 + sin(angle) * 10);
    image(coral, 10, 290 + sin(angle) * 20);
    image(blugue, 10, 400 + sin(angle) * 10);


    image(coral, 860, 290 + sin(angle) * 20);
    image(blugue, 860, 400 + sin(angle) * 10);
    image(algue, 1000, 450 + sin(angle) * 10);
}

/**
 * Function createBubble() that draws the shape of my bubble
 */
function createBubble(x, y, size) {
    const bubble = {
        x: x, //uses the x and y values that i declared in underwaterDraw()
        y: y,
        size: size,

        velocity: { //no velocity since its the mouse tha will move the bubble
            x: 0,
            y: 0,
        },

        stroke: "#ffffffff" //fill color
    };
    return bubble; //returns the propreties of our bubble
}

/**
 * Function updateBubble that calls the applyForces() + moveBubble() functions. Code for this animation is derived
 * from the examples that are showed in the meaterial in the course. 
 */
function updateBubble(bubble) {
    applyForces(bubble);
    moveBubble(bubble);
}

/**
 * Function applyForces() that adds a speed to the bubble when its being interacted by the user, as well as making it move 
 */
function applyForces(bubble) {

    bubble.velocity.x *= 0.99;
    bubble.velocity.y *= 0.99;

    // If the mouse is in range it affects the bubble
    const d = dist(mouseX, mouseY, bubble.x, bubble.y); //calculates distance mouseX mouseY with the x and y positions of the mouse
    if (d < bubble.size) {

        bubble.velocity.x += (bubble.x - mouseX) * 0.005; //pushes the bubble away from the mouse
        bubble.velocity.y += (bubble.y - mouseY) * 0.005;
    }
}

/**
 * function moveBubble() that pplies the bubbles's velocity to its position
 */
function moveBubble(bubble) {
    bubble.x += bubble.velocity.x;
    bubble.y += bubble.velocity.y;
}

/**
 * function drawBubble() that draws our bubble
 */
function drawBubble(bubble) {
    push();
    noFill();
    stroke(bubble.stroke)
    strokeWeight(3)
    ellipse(bubble.x, bubble.y, bubble.size);
    pop();
}

