/**
 * Variation Menu
 * Pippin Barr
 * 
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";

let state = "menu";

function preload() {
    preloadSpace();
    preloadGround();
    preloadUnderwater();
}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(1200, 600);
}


/**
 * Display the menu or the current variation
*/
function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "space-variation":
            spaceDraw();
            break
        case "ground-variation":
            groundDraw();
            break;
        case "underwater-variation":
            underwaterDraw();
            break;
    }
}

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
    switch (state) {
        case "menu":
            menuMousePressed();
            break;
        case "space-variation":
            spaceMousePressed();
            break
        case "ground-variation":
            groundMousePressed();
            break;
        case "underwater-variation":
            underwaterMousePressed();
            break;
    }
}

//function mouseDragged() {
//  switch (state) {
//
//       case "underwater-variation":
//         underwaterMouseDragged();
///         break;
//  }
//}




/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
    switch (state) {
        case "menu":
            menuKeyPressed(event);
            break;
        case "space-variation":
            spaceKeyPressed(event);
            break
        case "ground-variation":
            groundKeyPressed(event);
            break;
        case "underwater-variation":
            underwaterKeyPressed(event);
            break;
    }
}



