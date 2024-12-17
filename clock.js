let previousMillis = 0; // Variable to store the last time the clock updated
let timeString = ''; // Variable to store the current time string
let timeSlider; // Slider to adjust the clock // NEW CODE

function setup() {
  createCanvas(600, 600); // Canvas size remains the same
  noStroke();
  
  // Create the slider for time adjustment (0 to 23.99 for 24-hour simulation) // NEW CODE
  timeSlider = createSlider(0, 23.99, hour() + minute() / 60, 0.01); // NEW CODE
  timeSlider.position(60, 380); // Position the slider near the bottom // NEW CODE
  timeSlider.style('width', '500px'); // NEW CODE

}

function draw() {
   // Update background color based on time
  updateBackgroundColor();

  drawBlueBuildings(); // Draw the blue buildings
  drawRedBuildings(); // Draw the red buildings
  
  // Update and display the timer
  let currentMillis = millis();
  
  // Update the timer every second
  if (currentMillis - previousMillis >= 1000) {
    previousMillis = currentMillis; // Update the last updated time
    displayTimer(); // Call function to display the timer
  }

  // Draw the current time at the center top
  fill(255); // Set the text color to white
  textSize(32); // Set text size
  textAlign(CENTER, TOP); // Center align text horizontally at the top
  text(timeString, width / 2, 120); // Draw the timer at the center top
  
  
  // Draw an emoji beside the clock
  drawEmoji(width / 2 + 100, 120); // Call the function to draw the emoji
}

// Function to display the digital clock based on slider time // UPDATED CODE
function displayTimer() {
  let t = timeSlider.value(); // Get the current time value from the slider // NEW CODE
  let h = floor(t); // Extract the hour // NEW CODE
  let m = floor((t - h) * 60); // Extract the minute // NEW CODE
  let s = second(); // Use the real seconds

  // Format the time to always show two digits
  timeString = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2); // UPDATED CODE
}

// Function to draw the complex dark buildings
function drawBlueBuildings() {
  // Determine color based on mouse state
  let buildingColor = mouseIsPressed ? color(15, 25, 45) : color(100, 100, 100); // Blue color for buildings
  let buildingColorMid = mouseIsPressed ? color(20, 30, 50) : color(150, 150, 150); // Mid color for buildings
  let buildingColorLight = mouseIsPressed ? color(25, 40, 70) : color(200, 200, 200); // Light color for buildings

  // Far background buildings (slightly skinnier and more dense)
  fill(buildingColor);
  rect(160, 70, 70, 700); // Tall central background building
  fill(buildingColorMid);
  rect(90, 130, 60, 720); // Left background building
  rect(340, 150, 60, 450); // Right background building
  rect(460, 200, 80, 400); // Far right background building

  // Buildings in the mid-ground (slightly skinnier and more dense)
  fill(buildingColorLight);
  rect(0, 250, 120, 350); // Left-most building
  fill(buildingColor);
  rect(90, 150, 160, 700); // Center-left building
  fill(buildingColorMid);
  rect(370, 300, 100, 300); // Center-right building
  rect(500, 260, 70, 340); // Far right building

  // Add subtle shading for depth (representing city lights and shadows)
  fill(20, 30, 50, 180); 
  rect(390, 310, 40, 290); // Shaded part of right building
  rect(250, 210, 20, 390); // Shaded center building
  
  // Central lights - more detailed lights with varying sizes
  fill(200, 230, 255);
  rect(260, 380, 25, 30); // Light 1
  rect(260, 420, 25, 40); // Light 2
  rect(260, 480, 25, 50); // Light 3
  rect(260, 550, 25, 50); // Light 4
  rect(260, 310, 25, 50); // Light 5

  // Only draw the glow effect around some windows when the mouse is pressed
  if (mouseIsPressed) {
    drawWindowGlow(260, 280, 25, 45); //top 1
    drawWindowGlow(260, 380, 35, 35); //top 2
    drawWindowGlow(260, 480, 35, 55); //bottom1
    drawWindowGlow(260, 580, 35, 55); //bottom 2
  }
}

// Function to draw the red buildings
function drawRedBuildings() {
  // Determine color based on mouse state
  let redBuildingColor = mouseIsPressed ? color(150, 50, 50) : color(112,128,145); // Base color for red buildings

  // Drawing buildings with similar sizes and styles, positioned to blend with blue buildings
  fill(redBuildingColor);
  rect(80, 230, 100, 370); // Tall red building
  rect(200, 300, 60, 300); // Mid-height red building
  rect(415, 200, 130, 400); // Another tall red building
  
  // Adding windows to the red buildings for detail
  drawWindows(80, 250, 80, 350); // Windows for the tall red building
  drawWindows(430, 200, 100, 400); // Windows for the tall red building

  // Adding additional details like roofs
  drawRoof(80, 240, 100, 10); // Roof for the tall red building
  drawRoof(200, 300, 60, 10); // Roof for the mid-height red building
  drawRoof(415, 200, 130, 10); // Roof for the tall red building
}

// Function to draw roof details
function drawRoof(x, y, w, h) {
  // Change roof color based on mouse state
  fill(mouseIsPressed ? color(255, 0, 0) : color(115, 128, 155)); // Red color if mouse pressed, otherwise darker gray
  rect(x, y - h, w, h); // Roof rectangle
}

// Function to draw windows on buildings
function drawWindows(x, y, w, h) {
  // Determine window color based on mouse state
  let windowColor = mouseIsPressed ? color(255, 200, 200) : color(220, 220, 220); // Light grey when not pressed, same light red when pressed
  
  fill(windowColor);
  for (let i = y + 10; i < y + h; i += 40) {
    for (let j = x + 5; j < x + w; j += 20) {
      rect(j, i, 10, 20); // Drawing windows
    }
  }
}

// Function to draw a glow around a specific window/light
function drawWindowGlow(x, y, w, h) {
  // Light blue glow
  for (let i = 5; i < 20; i += 5) {
    fill(100, 130, 255, 100 - i * 5);
    rect(x - i / 1, y - i / 1, w + i, h + i);
    rect(x - i / 2, y - i / 2, w + i, h + i);
    rect(x - i / 10, y - i / 2, w + i, h + i);
  }
  
  // Red glow
  for (let i = 5; i < 20; i += 5) {
    fill(255, 0, 0, 100 - i * 5); // Red color with decreasing alpha
    rect(x - i / 0.5, y - i / 0.5, w + i, h + i);
  }
}


// Function to update the background color based on time
function updateBackgroundColor() {
  let h = hour(); // Get the current hour
  let m = minute(); // Get the current minute
  let t = h + m / 60; // Convert time to a float for smooth transitions

  let bgColor; // Variable to hold the background color

  // Determine the background color based on the time of day
  if (t >= 6 && t < 12) {
    // Morning: light blue
    bgColor = lerpColor(color(200, 220, 255), color(135, 200, 235), (t - 6) / 6);
  } else if (t >= 12 && t < 17) {
    // Afternoon: vibrant light blue
    bgColor = lerpColor(color(135, 200, 235), color(100, 180, 255), (t - 12) / 5);
  } else if (t >= 17 && t < 19) {
    // Evening: blend of yellow and light blue
    bgColor = lerpColor(color(255, 220, 150), color(135, 200, 235), (t - 17) / 2);
  } else {
    // Night: dark blue
    if (t >= 19) {
      bgColor = lerpColor(color(10, 20, 40), color(15, 30, 50), (t - 19) / 5);
    } else {
      bgColor = lerpColor(color(10, 20, 40), color(15, 30, 50), t / 6);
    }
  }

  background(bgColor); // Set the calculated background color
}

// Function to update the background color based on slider time // UPDATED CODE
function updateBackgroundColor() {
  let t = timeSlider.value(); // Get the current time value from the slider // NEW CODE

  let bgColor; // Variable to hold the background color

  // Determine the background color based on the time of day
  if (t >= 6 && t < 12) {
    // Morning: light blue
    bgColor = lerpColor(color(200, 220, 255), color(135, 200, 235), (t - 6) / 6);
  } else if (t >= 12 && t < 17) {
    // Afternoon: vibrant light blue
    bgColor = lerpColor(color(135, 200, 235), color(100, 180, 255), (t - 12) / 5);
  } else if (t >= 17 && t < 19) {
    // Evening: blend of yellow and light blue
    bgColor = lerpColor(color(255, 220, 150), color(135, 200, 235), (t - 17) / 2);
  } else {
    // Night: dark blue
    if (t >= 19) {
      bgColor = lerpColor(color(10, 20, 40), color(15, 30, 50), (t - 19) / 5);
    } else {
      bgColor = lerpColor(color(10, 20, 40), color(15, 30, 50), t / 6);
    }
  }

  background(bgColor); // Set the calculated background color
}

// Function to display the digital clock based on slider time // UPDATED CODE
function displayTimer() {
  let t = timeSlider.value(); // Get the current time value from the slider // NEW CODE
  let h = floor(t); // Extract the hour // NEW CODE
  let m = floor((t - h) * 60); // Extract the minute // NEW CODE
  let s = second(); // Use the real seconds

  // Format the time to always show two digits
  timeString = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2); // UPDATED CODE
}

// Function to draw an emoji beside the clock
function drawEmoji(x, y) {
  textSize(32); // Set the size for the emoji
  textFont('Arial'); // Use a font that supports emojis
  textAlign(CENTER, CENTER); // Center the emoji
  text("🌞", 310, 28); // Draw the emoji (smiley face in this case)
  text("🌘", 549, 28); // Draw the emoji (smiley face in this case)
  text("🌑", 72, 28); // Draw the emoji (smiley face in this case)
  text("🌇", 420, 28); // Draw the emoji (smiley face in this case)
  text("🌅", 200, 28); // Draw the emoji (smiley face in this case)
}