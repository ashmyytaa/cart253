let planetOne;
let planetTwo;
let planetThree;
let speedrock = 0;


function preload() {

    planetOne = loadImage('assets/images/planetOne.png');
}
function spaceSetup() {

}

/**
 * This will be called every frame when the blue variation is active
 */
function spaceDraw() {
    background(0)
    stars();
    image(planetOne, 700, 100, 410, 300);
    space();


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

}


function space() {

    push();
    noStroke();
    fill(114, 117, 122);
    ellipse(100, 550, 600);
    pop();

    moonCraters(100, 300, 50);
    moonCraters(50, 550, 60);
    moonCraters(200, 400, 60);
    moonCraters(300, 520, 60);

}

function stars() {

    for (let i = 0; i < 50; i++) {  // draw 100 particles
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

