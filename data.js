let flowerData = [];
let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let flowerEmojis = ["🌸", "🌻", "🌹", "🌼", "🌷", "🌺", "💐"];
let specialEmojis = {
  "Monday": "😢",     // Sad face emoji
  "Wednesday": "😍",  // Heart face emoji
  "Thursday": "😊",   // Happy face emoji
  "Friday": "🤧",     // Neutral face emoji
  "Sunday": "🥰"      // Heart face emoji for Sunday
};
let maxFlowers = 10;

let baseSize = 20; // Base size for emoji text
let leafEmojis = ["🍂", "🍁", "🌰", "🎃"];
let leaves = []; // Array to store leaves - used to declare an empty array named leaves

function setup() {
  createCanvas(600, 600).parent("sketch-container1");
  noStroke();

  // Flower data for specified days
  flowerData = [6, 0, 1, 10, 5, 0, 1]; // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday

  // Initialize leaves with random positions and falling speed
  for (let i = 0; i < 20; i++) {
    leaves.push({
      emoji: random(leafEmojis),
      x: random(width),
      y: random(-height, 0),
      speed: random(1, 3),
      size: random(20, 30)
    });
  }
}

function draw() {
  // Light blue to fall-toned gradient background
  for (let i = 0; i <= height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color(200, 230, 255), color(240, 180, 150), inter);
    stroke(c);
    line(0, i, width, i);
  }
  
  textAlign(CENTER, CENTER);

  // Stylized title with warm autumn colors
  textSize(36);
  let titleGradient = drawingContext.createLinearGradient(0, 0, width, 0);
  titleGradient.addColorStop(0, '#d35400');
  titleGradient.addColorStop(1, '#e67e22');
  drawingContext.fillStyle = titleGradient;
  text("Buying Flowers in October", width / 2, 60);

  // Draw leaves (including chestnut and pumpkin) 
  for (let leaf of leaves) {
    textSize(leaf.size);
    text(leaf.emoji, leaf.x, leaf.y);

    // Move leaf down, reset to top when reaching bottom
    leaf.y += leaf.speed;
    if (leaf.y > height) {
      leaf.y = random(-height, 0);
      leaf.x = random(width);
      leaf.speed = random(1, 3);
    }
  }

  // Display flower emojis with pulsing effect and face emojis
  for (let i = 0; i < flowerData.length; i++) {
    // Increase horizontal spacing between data points
    let x = map(i, 0, daysOfWeek.length - 1, 50, width - 50);
    let y = height / 2 + sin(frameCount * 0.03 + i) * 20;

    // Display face emoji at the top if it's a special day
    let currentDay = daysOfWeek[i];
    if (specialEmojis[currentDay]) {
      textSize(24);
      text(specialEmojis[currentDay], x, y - 80); // Place face emoji above the flower emoji
    }

    // Display flower emoji only if the number count is greater than 0
    if (flowerData[i] > 0) {
      // Select a flower emoji from the array
      let flowerEmoji = flowerEmojis[i % flowerEmojis.length];

      // Base size based on flower purchase count and pulsing effect
      let size = baseSize + flowerData[i] * 5 + sin(frameCount * 0.1 + i) * 5;
      textSize(size);

      // Displaying the flower emoji
      fill(0);
      text(flowerEmoji, x, y);
    }

    // Displaying the number of purchases for each day below the emoji (or 0 if no purchases)
    textSize(16);
    fill(0);
    text(flowerData[i], x, y + baseSize / 2 + 35);
    text(currentDay, x, y - baseSize / 2 - 35);
  }
}
