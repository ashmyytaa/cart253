let planetOne;
let planetTwo;
let planetThree;
let speedrock = 0;
var offset = 0;
let star;


let particles = [];

const ellipseX = 500;
const ellipseY = 200;
const ellipseSize = 150;
const ellipseHeight = 150;





function preloadSpace() {

    star = loadImage('assets/images/stars.png');
}


function spaceSetup() {
}

/**
 * This will be called every frame when the blue variation is active
 */
function spaceDraw() {
    background(0, 50)
    stars();
    //image(planetOne, 700, 100, 410, 300);
    space();
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

    moonCraters(100, 300, 50);
    moonCraters(50, 550, 60);
    moonCraters(200, 400, 60);
    moonCraters(300, 520, 60);
    moonCraters(100, 470, 30);
    moonCraters(50, 350, 30);
    moonCraters(30, 400, 40);
    moonCraters(150, 560, 50);
    moonCraters(350, 430, 40);




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



function moonCraters(xSpace, ySpace, sizeSpace) {
    push();
    stroke(65, 67, 71);
    strokeWeight(2);
    fill(63, 66, 71);
    ellipse(xSpace, ySpace, sizeSpace);
    pop();
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