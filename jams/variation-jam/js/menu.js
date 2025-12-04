/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

const menuText = `
S - Space variation
G - Ground variation
U - Underwater variation`

const title = `
Our Beautiful Universe

Click on the keys to visit each space and the esc key to come back to the menu.`



/**
 * Display the main menu
 */
function menuDraw() {
    background(0, 50); //draws black bg with a 50 percent transparency to be them able to work with fading in my other functions
    starss(); //calls function stars() that displays my stars on the cavnas


    push();
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(title, width / 2, 100);
    pop();

    push();
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(menuText, width / 2, 400);
    pop();
}

/**
 * Listen to the keyboard
 */
function menuKeyPressed(event) {
    switch (event.keyCode) {
        case 83:
            state = "space-variation";
            spaceSetup();
            break;

        case 71:
            state = "ground-variation";
            groundSetup();
            break;

        case 85:
            state = "underwater-variation";
            underwaterSetup();
            break;
    }
}

/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMousePressed() {

}

/**
 * Function stars() that draws all the tiny ellipses that makes it look like stars
 */
function starss() {
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
