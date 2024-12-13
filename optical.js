let angle = 0; // rotation starts from a "neutral" position.
let colorScheme = 0;


function setup() {
  createCanvas(600, 600).parent("sketch-container1");
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(0);

  

  translate(width / 2, height / 2);
  
  // Define color schemes with more vibrant transitions
  let colors;
  if (colorScheme === 0) {
    colors = [
      color(255, 50, 150, 180), // (R, G, B, Alpha)
      color(50, 255, 150, 180),
      color(50, 150, 255, 180),
      color(255, 200, 50, 180),
      color(150, 50, 255, 180)
    ];
  } else {
    colors = [
      color(255, 150, 50, 180),
      color(150, 255, 50, 180),
      color(50, 150, 255, 180),
      color(255, 50, 200, 180),
      color(50, 255, 200, 180)
    ];
  }

  // Draw multiple rotating layers for complexity (Looped 5 times)
  for (let j = 0; j < 5; j++) {
    push();
    rotate(angle * (j + 1) * 0.5); // Rotate each layer at different speeds

    // Draw hexagon layers with varying sizes
    fill(colors[j % colors.length]);
    drawHexagon(0, 0, map(sin(angle + j * 20), -1, 1, 50, 150));

    // Draw rotating beams (Draws six beams around each hexagon)
    for (let i = 0; i < 6; i++) { //Rotates each beam by
      push();
      rotate((i * 60) + angle * (j + 1));
      fill(colors[(i + j) % colors.length]);
      drawGradientBeam(j * 30);
      pop();
    }

    pop();
  }

  // Adjust rotation speed based on mouse position for more control
  angle += map(mouseX, 0, width, 0.1, 1.5); 
  // Adjusts the rotation speed based on the horizontal mouse position
}

function drawHexagon(x, y, radius) { 
  beginShape();
  for (let i = 0; i < 6; i++) { //Loops six times to create a hexagon, calculating each vertex using cos() and sin() for positioning around a circle 
    let angle = 60 * i - 30;
    let vx = x + cos(angle) * radius;
    let vy = y + sin(angle) * radius;
    vertex(vx, vy);
  }
  endShape(CLOSE);
}

function drawGradientBeam(offset) {
  // Draw gradient beams with more complexity
  for (let i = 0; i < 10; i++) {
    fill(lerpColor(color(156, 74, 255, 50), color(252,240,76, 150), i / 10)); // smoothly blend between the two colors over the 10 segments
    rect(offset, -5, 150, 10); // Beams with gradient colors
    translate(15, 0); // translated to create displacement 
  }
}

// Change color scheme on mouse click 
function mousePressed() {
  colorScheme = (colorScheme + 1) % 2;
}

//When the mouse is on the far left side of the canvas (mouseX = 0), the map() function will return a value close to 0.1.

//When the mouse is on the far right side of the canvas (mouseX = width), the map() function will return a value close to 1.5.

//As the mouse moves from left to right, the returned value smoothly transitions from 0.1 to 1.5.