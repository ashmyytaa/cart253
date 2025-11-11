/**
 * Machines
 * Pippin Barr
 * 
 * A starting point for a project that displays different machines
 * on the canvas. Eventually I'd like to be able to drag and drop
 * items onto the machines and have them act in different ways.
 * For now I'm happy to just show that they're distinct.
 */

"use strict";
// In this program at least
const machineWidth = 100;
const machineHeight = 100;


let machines = [
    {
        x: 0,
        y: 100,
        width: machineWidth,
        height: machineHeight,
        fill: "#ff4400",
    },
    {
        x: 150,
        y: 100,
        width: machineWidth,
        height: machineHeight,
        fill: "#bbbbff",
    },
    {
        x: 300,
        y: 100,
        width: machineWidth,
        height: machineHeight,
        fill: "#777777"
    }
];

let incinerator = {
    x: 0,
    y: 100,
    width: machineWidth,
    height: machineHeight,
    fill: "#ff4400",
};

let freezer = {
    x: 150,
    y: 100,
    width: machineWidth,
    height: machineHeight,
    fill: "#bbbbff",
};

let crusher = {
    x: 300,
    y: 100,
    width: machineWidth,
    height: machineHeight,
    fill: "#777777"
};


/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 200);
}

/**
 * Display the three machines
 */
function draw() {
    background(0);

    //  drawMachine(incinerator);
    //drawMachine(freezer);
    //drawMachine(crusher);

    for (let machine of machines) {
        drawMachine(machine);
    }

    // Incinerator
    ///  push();
    // noStroke();
    //fill(incinerator.fill);
    //rect(incinerator.x, incinerator.y, incinerator.width, incinerator.height);
    //  fill("#ff4400");
    //   rect(0, 100, 100, 100);
    // pop();

    // Freezer
    // push();
    //noStroke();
    // fill(freezer.fill);
    //rect(freezer.x, freezer.y, freezer.width, freezer.height);
    //  fill("#bbbbff");
    // rect(150, 100, 100, 100);
    //  pop();

    // Crusher
    // push();
    // noStroke();
    // fill(crusher.fill);
    //rect(crusher.x, crusher.y, crusher.width, crusher.height);
    //  fill("#777777");
    // rect(300, 100, 100, 100);
    //pop();
}


function drawMachine(machine) {
    push();
    noStroke();
    fill(machine.fill);
    rect(machine.x, machine.y, machine.width, machine.height);
    pop();
}