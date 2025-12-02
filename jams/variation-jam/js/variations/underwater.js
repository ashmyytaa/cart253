

let coral;
let algue;
let blugue;
let angle = 0;

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



let x = [], y = [], x1 = [], y1 = [], x2 = [], y2 = [];
let vx = [], vy = [];



function preloadUnderwater() {
    coral = loadImage('assets/images/coral.png');
    algue = loadImage('assets/images/algue.png');
    blugue = loadImage('assets/images/blugue.png');

}

function underwaterSetup() {
    for (let i = 0; i < 50; i++) {
        x[i] = random(0, width);
        y[i] = random(0, height);
        x1[i] = random(0, width);
        y1[i] = random(0, height);
        x2[i] = random(0, width);
        y2[i] = random(0, height);

        // Random speed
        vx[i] = random(-2, 2);
        vy[i] = random(-2, 2);
    }


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

    ;
}

/**
 * This will be called every frame when the blue variation is active
 */
function underwaterDraw() {
    underwater();


    fishes();


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


    coralpic();
}

/**
 * This will be called whenever a key is pressed while the blue variation is active
 */
function underwaterKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
//function underwaterMousePressed() {

//}



function underwater() {

    background("#0d2431ff");

    push();
    noStroke();
    fill(135, 206, 235, 10);
    rect(0, 0, width, height);
    pop();


    wave(300, 0.002, "#071c29ff", 1);
    wave(600, 0.002, "#0c1b25ff", 2);
    wave(900, 0.002, "#030f17ff", 3);


}


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


function fishes() {

    for (let i = 0; i < 20; i++) {

        x[i] += vx[i];
        y[i] += vy[i];

        if (x[i] < 0 || x[i] > width) {
            vx[i] *= -1;

        }
        if (y[i] < 0 || y[i] > height) {
            vy[i] *= -1;
        }


        push();
        translate(x[i], y[i]);
        if (vx[i] < 0) {
            scale(-1, 1);
        }

        noStroke(); //fish head
        fill(113, 197, 227);
        ellipse(0, 0, 30, 20);

        noStroke(); //fish tail
        fill(113, 197, 227);
        triangle(0, 0, -30, -10, -30, 10);

        noStroke(); //fish eyes
        fill(0);
        ellipse(10, 2, 5, 5);
        pop();
    }
}


function coralpic() {
    angle += 0.05;

    image(algue, 150, 450 + sin(angle) * 10);
    image(coral, 10, 290 + sin(angle) * 20);
    image(blugue, 10, 400 + sin(angle) * 10);
}








function createBubble(x, y, size) {
    const bubble = {
        // Position and dimensions
        x: x,
        y: y,
        size: size,
        // How it moves!
        velocity: {
            x: 0,
            y: 0
        },
        // Appearance
        stroke: "#ffffffff"
    };
    return bubble;
}




function updateBubble(bubble) {
    applyForces(bubble);
    moveBubble(bubble);
}









function applyForces(bubble) {
    // Apply friction to the stone by multiplying it by a fraction
    // less than 1, reducing it
    bubble.velocity.x *= 0.95;
    bubble.velocity.y *= 0.95;
    // If it gets close to 0, make it zero
    if (abs(bubble.velocity.x) < 0.1) {
        bubble.velocity.x = 0;
    }
    if (abs(bubble.velocity.y) < 0.1) {
        bubble.velocity.y = 0;
    }

    // If the mouse is in range it affects the stone...
    const d = dist(mouseX, mouseY, bubble.x, bubble.y);
    if (d < bubble.size) {



        bubble.velocity.x += (bubble.x - mouseX) * 0.005;
        bubble.velocity.y += (bubble.y - mouseY) * 0.005;
    }
}

/**
 * Applies the stone's velocity to its position
 */
function moveBubble(bubble) {
    bubble.x += bubble.velocity.x;
    bubble.y += bubble.velocity.y;


}

/**
 * Displays a stone as a circle
 */
function drawBubble(bubble) {
    push();
    noFill();
    stroke(bubble.stroke)
    strokeWeight(3)
    ellipse(bubble.x, bubble.y, bubble.size);
    pop();
}


