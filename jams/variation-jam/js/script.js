/**
 * Variation Menu - Our Beautiful Universe
 * Ashmitha Kanagiah
 * 
 * 
 */

"use strict";

let state = "menu";


/**
 * Function preload() combines all the preload functions that I have in each of my variation, to prperly load up all my pictures
*/
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



