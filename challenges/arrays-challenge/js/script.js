/**
 * Boingo
 * Pippin Barr
 *
 * A ball that bounces around on the canvas
 */

let balls = [];
/**
 * Create the canvas and the ball
 */
function setup() {
    // Create the canvas
    createCanvas(400, 400);
    // Create the ball
    ball1 = createBall();
}

/**
 * Creates a random ball
 */
function createBall() {
    // Create a ball object with appropriate properties

    let newBall = {
        x: random(0, width),
        y: random(0, height),
        size: random(10, 20),
        fill: random(0, 255),

        velocity: {
            x: random(-5, 5),
            y: random(-5, 5)
        }
    };

    return newBall;
}

/**
 * Moves and draws the ball
 */
function draw() {
    background("#87ceeb");

    for (let newBall of balls) {
        moveBall(newBall);
        bounceBall(newBall);
        drawBall(newBall);
    }


}

/**
 * Moves the ball according to its velocity
 */
function moveBall(newBall) {
    newBall.x += newBall.velocity.x;
    newBall.y += newBall.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(newBall) {
    // Check if the ball has reached the left or right
    const bounceX = (newBall.x > width || newBall.x < 0);
    // Check if the ball has reached the top or bottom
    const bounceY = (newBall.y > height || newBall.y < 0);

    // Handle bouncing horizontally
    if (bounceX) {
        newBall.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (bounceY) {
        newBall.velocity.y *= -1;
    }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(newBall) {
    push();
    noStroke();
    fill(newBall.fill);
    ellipse(newBall.x, newBall.y, newBall.size);
    pop();
}

function mousePressed() {

    let newBall = createBall();
    balls.push(newBall);



}