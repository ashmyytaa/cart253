

let coral;
let algue;
let blugue;
let angle = 0;



let x = [], y = [], x1 = [], y1 = [], x2 = [], y2 = [];
let vx = [], vy = [];



function preload() {
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

}

/**
 * This will be called every frame when the blue variation is active
 */
function underwaterDraw() {
    underwater();

    coralpic();
    fishes();


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