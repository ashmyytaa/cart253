/**
 * This is my space.js file that contains all the drawing + animation dedicated to the space
 * variation. Its functions will be called in the script.js and menu.js to ensure a well functionning
 * variation menu.
 */


/**
 * Variable declarations
 */
var offset = 0; //variable offset used in my perlin noise animation, to create waves
let star; //variable star that stores my stars image

//mooCreater variables that I have initialized 
let moonCraterOne;
let moonCraterTwo;
let moonCraterThree;
let moonCraterFour;
let moonCreaterFive;
let moonCraterSix;
let moonCraterSeven;
let moonCraterEight;
let moonCraterNine;

let particles = []; //empty particles array

//ellise variables declared for my particles animation
const ellipseX = 500;
const ellipseY = 200;
const ellipseSize = 150;
const ellipseHeight = 150;

/**
 * Function preload() that loads my images
 */
function preloadSpace() {
    star = loadImage('assets/images/stars.png');
}

/**
 * Function spaceSetup() for my space variation that gets called once
 */
function spaceSetup() {

    //declaring all the properties for the positioning + size of my moon craters because I want them
    //to be located in specific areas.
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
 * Function groundDraw() for my ground variation that draws my shapes and initializes functions
 */
function spaceDraw() {
    background(0, 50); //draws black bg with a 50 percent transparency to be them able to work with fading in my other functions

    stars(); //calls function stars() that displays my stars on the cavnas
    space(); //draws my space() function that displays the images i draw in that function


    //calls the checkOverlap() function described below and I want to check for each of my moonCraters
    checkOverlap(moonCraterOne);
    checkOverlap(moonCraterTwo);
    checkOverlap(moonCraterThree);
    checkOverlap(moonCraterFour);
    checkOverlap(moonCreaterFive);
    checkOverlap(moonCraterSix);
    checkOverlap(moonCraterSeven);
    checkOverlap(moonCraterEight);
    checkOverlap(moonCraterNine);

    //calls the drawElement() function that draws my moon craters with its values that ive declared for each of them in spaceSetup()
    drawElement(moonCraterOne);
    drawElement(moonCraterTwo);
    drawElement(moonCraterThree);
    drawElement(moonCraterFour);
    drawElement(moonCreaterFive);
    drawElement(moonCraterSix);
    drawElement(moonCraterSeven);
    drawElement(moonCraterEight);
    drawElement(moonCraterNine);

    //calls the drawParticles() function where it draws my particles on my ellipse
    drawParticles();

}

/**
 * This will be called whenever a key is pressed while the space variation is active
 */
function spaceKeyPressed(event) {
    if (event.keyCode === 27) {  //key 27 = esc key, which will take the user back to the menu screen
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the space variation is active
 */
function spaceMousePressed() {
    starStamp(mouseX, mouseY);
}

/**
 * Function space() draws my shapes of my planets as well as animations that belong to them, this function is
 * kind of a function that like combines multiple functions and shapes togheter and then just then just gets called in draw
 */
function space() {

    push(); //draws blue planet
    noStroke();
    fill(75, 134, 201);
    ellipse(500, 200, 300);
    pop();

    push(); //draws grey planet
    noStroke();
    fill(114, 117, 122);
    ellipse(100, 550, 600);
    pop();

    //declaring my properties for waves, which also is used for the positioning of my orange planet
    let waveX = 950;
    let waveY = 300;
    let radiusX = 200;
    let radiusY = 200;

    push(); //draws orange planet 
    noStroke();
    fill(173, 99, 45);
    ellipse(waveX, waveY, radiusX * 2, radiusY * 2); // ellipse itself
    pop();


    //draws my wave onto the orange planet, four waves will be drawn
    for (let i = 0; i < 4; i++) {
        drawWave(waveX, waveY, radiusX, radiusY, i);
    }

    offset += 0.05; // animate waves
}


/**
 * Function stars() that draws all the tiny ellipses that makes it look like stars
 */
function stars() {
    for (let i = 0; i < 50; i++) { //50 stars will be drawn
        let xStars = random(0, width);
        let yStars = random(0, height);

        push();//draws my stars
        noStroke();
        fill('white');
        drawingContext.shadowBlur = 50; // features that i found online that adds glow to a fill
        drawingContext.shadowColor = color(255, 255, 255); // features that i found online that adds glow to a fill
        ellipse(xStars, yStars, 1.5);
        pop();
    }
}

/**
 * Function drawWave() that does the animation of my waves that does a sine curve movement
 * I tried to imitate the planetary rings that we see in certain planets in our universe
 */
function drawWave(waveX, waveY, radiusX, radiusY, gap) {
    push();
    stroke(158, 71, 8);
    strokeWeight(3);
    noFill();
    beginShape();
    for (let x = waveX - radiusX; x <= waveX + radiusX; x++) { //for loop that loops accross the width of the ellipse

        //angle at which the waves move from the width of the ellipse, which an offset is added to animate the waves up and down, and a gap is added for my 4
        // waves to not overlap eachother
        let angle = offset + (x - (waveX - radiusX)) * 0.009 + gap;
        let y = waveY + sin(angle) * radiusY * 0.2;

        vertex(x, y); //conects all the points on the width if the ellipse to create my waves
    }
    endShape();
    pop();
}


/**
 * Function drawParticles() that draws all my small eliipses that make up particles, that will be figured on the
 * blue planet. 
 */
function drawParticles() {

    //adds 2 particles to the empty particles array that we declared above
    for (let i = 0; i < 2; i++) {
        particles.push(createParticle());
    }

    // draws the particles and loops through the array
    for (let i = particles.length - 1; i >= 0; i--) {
        let particle = particles[i];

        //speed at which rate the particles are fading away
        particle.alpha -= 5;

        push(); //draws our particles
        fill(particle.r, particle.g, particle.b, particle.alpha);
        noStroke();
        ellipse(particle.x, particle.y, particle.size);
        pop();

        //removes the particles from the array using splice. it removes the particles that have been fully faded away
        if (particle.alpha <= 0) {
            particles.splice(i, 1);
        }
    }
}

// Function to create a particle inside the ellipse
function createParticle() {
    let angle = random(TWO_PI); //random direction within a full circle
    let r = random(); //random position further from the center
    let x = ellipseX + r * ellipseSize * cos(angle); //makes sure the particles stay withing the positions of our blue circle
    let y = ellipseY + r * ellipseHeight * sin(angle);

    return { //returns our created particle
        x: x,
        y: y,
        size: random(5, 10),
        alpha: 400,
        r: random(50, 120), //colors to be in the blue/gray shades
        g: random(80, 150),
        b: random(150, 220)

    };
}

/**
 * Function starStamp() that shows a star whenever the user clicks on the mouse. The star fades away each time. 
 */
function starStamp(x, y) {

    push();
    imageMode(CENTER);
    const speed = abs(movedX) + abs(movedY);
    const size = map(speed, 0, 20, 100, 50);
    image(star, x, y, size, size);
    pop();
}

/**
 * Function moocCraters() that returns the drawings and properties for my moon craters that belong on the grey planet
 */
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

/**
 * FFunction checkOverlap() that checks if mouse overlaps the ellipses that serve as moon craters. This code is derived
 * from one of the example codes we have seen in our course material. 
 */
function checkOverlap(target) {
    const d = dist(mouseX, mouseY, target.x, target.y);
    const overlap = (d < target.size / 2);
    if (overlap) {
        target.fill = target.fills.overlap;
    } else {
        target.fill = target.fills.noOverlap;
    }
}

/**
 * Function drawElement() that draws my moon craters.This code is derived
 * from one of the example codes we have seen in our course material. 
 */
function drawElement(element) {
    push();
    noStroke();
    fill(element.fill);
    ellipse(element.x, element.y, element.size);
    pop();
}
