/**
 * Keyboard Events
 * Pippin Barr
 * 
 * A chance to experiment with keyboard events in a simple setting.
*/

"use strict";

// Our ball
const ball = {
    // Position
    x: 200,
    y: 200,
    // Size
    size: 50,
    // fill
    fill: "#ffffff",
    // fills
    fills: {
        white: "#ffffff",
        red: "#ff0000",
        blue: "#0000ff"
    },
    // Keys that control the ball's colour
    keys: {
        redKey: 82, // R
        blueKey: 66 // B
    }
}

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draws the ball
 */
function draw() {
    background(0);

    // Draw the ball
    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}

/**
 * Handle keypress:
 * - r = make the ball red
 * - b = make the ball blue
 */




//function keyPressed(event) {
//   if (event.key === "r") {
//   ball.fill = ball.fills.red;
//  }
//   else if (event.key === "b") {
//      ball.fill = ball.fills.blue;
//  }
//}

/**
 * Handle keyreleased:
 * - r or b = Set the ball back to default
 */
//function keyReleased(event) {
// if (event.key === "r" || event.key === "b") {
//     ball.fill = ball.fills.white;
// }
//}//


/**
 * Handle keypress:
 * - R = make the ball red
 * - B = make the ball blue
 */
//function keyPressed(event) {
// if (event.keyCode === 82) {
//     ball.fill = ball.fills.red;
// }
//   else if (event.keyCode === 66) {
//       ball.fill = ball.fills.blue;
//  }
//}

/**
 * Handle keyreleased:
 * - R or B = Set the ball back to default
 */
//function keyReleased(event) {
//  if (event.keyCode === 82 || event.keyCode === 66) {
//     ball.fill = ball.fills.white;
// }
//}

/**
 * Handle keypress:
 * - R = make the ball red
 * - B = make the ball blue
 */
function keyPressed(event) {
    if (event.keyCode === ball.keys.redKey) {
        ball.fill = ball.fills.red;
    }
    else if (event.keyCode === ball.keys.blueKey) {
        ball.fill = ball.fills.blue;
    }
}

/**
 * Handle keyreleased:
 * - R or B = Set the ball back to default
 */
function keyReleased(event) {
    if (event.keyCode === ball.keys.redKey || event.keyCode === ball.keys.blueKey) {
        ball.fill = ball.fills.white;
    }
}