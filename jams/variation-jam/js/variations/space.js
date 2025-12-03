let planetOne;
let planetTwo;
let planetThree;
let speedrock = 0;
var offset = 0;
let star;

let moonCraterOne;
let moonCraterTwo;
let moonCraterThree;
let moonCraterFour;
let moonCreaterFive;
let moonCraterSix;
let moonCraterSeven;
let moonCraterEight;
let moonCraterNine;


let particles = [];

const ellipseX = 500;
const ellipseY = 200;
const ellipseSize = 150;
const ellipseHeight = 150;





function preloadSpace() {

    star = loadImage('assets/images/stars.png');
}


function spaceSetup() {

    moonCraterOne = moonCraters(100, 300, 50);
    moonCraterTwo = moonCraters(50, 550, 60);
    moonCraterThree = moonCraters(200, 400, 60);
    moonCraterFour = moonCraters(300, 520, 60);
    moonCreaterFive = moonCraters(100, 470, 30);
    moonCraterSix = moonCraters(50, 350, 30);
    moonCraterSeven = moonCraters(30, 400, 40);
    moonCraterEight = moonCraters(150, 560, 50);
    moonCraterNine = moonCraters(350, 430, 40);
}

/**
 * This will be called every frame when the blue variation is active
 */
function spaceDraw() {
    background(0, 50)
    stars();
    //image(planetOne, 700, 100, 410, 300);
    space();

    checkOverlap(moonCraterOne);
    checkOverlap(moonCraterTwo);
    checkOverlap(moonCraterThree);
    checkOverlap(moonCraterFour);
    checkOverlap(moonCreaterFive);
    checkOverlap(moonCraterSix);
    checkOverlap(moonCraterSeven);
    checkOverlap(moonCraterEight);
    checkOverlap(moonCraterNine);

    drawElement(moonCraterOne);
    drawElement(moonCraterTwo);
    drawElement(moonCraterThree);
    drawElement(moonCraterFour);
    drawElement(moonCreaterFive);
    drawElement(moonCraterSix);
    drawElement(moonCraterSeven);
    drawElement(moonCraterEight);
    drawElement(moonCraterNine);



    paintEllipse();

}

/**
 * This will be called whenever a key is pressed while the blue variation is active
 */
function spaceKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function spaceMousePressed() {
    starStamp(mouseX, mouseY);
}


function space() {
    push();
    noStroke();
    fill(75, 134, 201);
    ellipse(500, 200, 300);
    pop();


    push();
    noStroke();
    fill(114, 117, 122);
    ellipse(100, 550, 600);
    pop();

    let waveX = 950;
    let waveY = 300;
    let radiusX = 200;
    let radiusY = 200;

    push();
    noStroke();
    fill(173, 99, 45);
    ellipse(waveX, waveY, radiusX * 2, radiusY * 2); // ellipse itself
    pop();


    for (let i = 0; i < 4; i++) {
        drawWave(waveX, waveY, radiusX, radiusY, i);
    }

    offset += 0.05; // animate waves
}

function stars() {

    for (let i = 0; i < 50; i++) {
        let xStars = random(0, 1200);
        let yStars = random(0, 600);
        push();
        noStroke();
        fill('white');
        drawingContext.shadowBlur = 50; // features that i found online that adds glow to a text
        drawingContext.shadowColor = color(255, 255, 255);
        ellipse(xStars, yStars, 1.5, 1.5);
        pop();
    }
}



function drawWave(waveX, waveY, radiusX, radiusY, gap) {
    stroke(158, 71, 8);
    strokeWeight(3);

    noFill();
    beginShape();
    for (let x = waveX - radiusX; x <= waveX + radiusX; x++) {

        let angle = offset + (x - (waveX - radiusX)) * 0.009 + gap;


        let y = waveY + sin(angle) * radiusY * 0.1; // reduce 0.5 to stay well inside

        vertex(x, y);
    }
    endShape();
}



function paintEllipse() {

    // draws the ellipse
    push();
    noFill();
    noStroke();
    ellipse(ellipseX, ellipseY, ellipseSize * 2, ellipseHeight * 2);
    pop();

    // add new particles
    for (let i = 0; i < 5; i++) {
        particles.push(createParticle());
    }

    // draws the particles
    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];

        // fading away particles
        p.max -= 2;

        fill(p.r, p.g, p.b, p.max);
        noStroke();
        ellipse(p.x, p.y, p.size);

        // Remove dead particles
        if (p.max <= 0) {
            particles.splice(i, 1);
        }
    }
}

// Function to create a particle inside the ellipse
function createParticle() {
    let angle = random(TWO_PI);
    let r = sqrt(random());
    let x = ellipseX + r * ellipseSize * cos(angle);
    let y = ellipseY + r * ellipseHeight * sin(angle);

    return {
        x: x,
        y: y,
        size: random(5, 10),
        max: 150,
        r: random(50, 120),
        g: random(80, 150),
        b: random(150, 220)
    };
}


function starStamp(x, y) {
    push();
    imageMode(CENTER);

    const speed = abs(movedX) + abs(movedY);
    const size = map(speed, 0, 20, 100, 50);

    image(star, x, y, size, size);
    pop();
}



function moonCraters(x, y, size) {
    return {
        x: x,
        y: y,
        size: size,
        fill: color(63, 66, 71),
        fills: {
            noOverlap: color(63, 66, 71),
            overlap: color(245, 246, 247, 50),
        }
    };
}

function checkOverlap(target) {
    const d = dist(mouseX, mouseY, target.x, target.y);
    const overlap = (d < target.size / 2);
    if (overlap) {
        target.fill = target.fills.overlap;
    } else {
        target.fill = target.fills.noOverlap;
    }
}

function drawElement(element) {
    push();
    noStroke();
    fill(element.fill);
    ellipse(element.x, element.y, element.size);
    pop();
}
