let planetImg, startButton, rocket, carrotImg, bedroom, kitchen, backyard;
let rocketY = 150; // Initial rocket position
let rocketMoving = false; // Flag for rocket movement
let carrotX = 205, carrotY = 220; // Initial carrot position
let carrotVisible = true; // Flag for carrot visibility
let scene = "start"; // Current scene
let playerX = 505, playerY = 210; // Player's initial position
let playerSpeed = 3; // Player movement speed
let playerState = 'sitting'; // Player state: sitting, walking, or running
let textVisible = true; // Flag for text visibility
let sound;

// Carrot data for different scenes
let bedroomCarrots = [
  { x: 200, y: 230, visible: true, displayImg: null },
  { x: 300, y: 350, visible: true, displayImg: null },
  { x: 520, y: 230, visible: true, displayImg: null },
];

let KitchenCarrots = [
  { x: 350, y: 100, visible: true, displayImg: null },
  { x: 370, y: 280, visible: true, displayImg: null },
];

let BackyardCarrots = [
  { x: 160, y: 310, visible: true, displayImg: null },
  { x: 310, y: 405, visible: true, displayImg: null },
];

// Additional images
let eatImg, boxImg, bedImg; 
let BirdieImg, YogurtImg; 
let sittingImg, walkingImg, runningImg;

// Preload assets
function preload() {
  

  planetImg = loadImage('assets/Planet Rabbit.png');
  startButton = loadImage('assets/Start Button.png');
  rocket = loadImage('assets/Rocket.png');
  carrotImg = loadImage('assets/Carrot.png');
  bedroom = loadImage('assets/Bedroom.jpeg');
  kitchen = loadImage('assets/Kitchen.jpeg');
  backyard = loadImage('assets/Backyard.jpeg');

  sittingImg = loadImage('Bunny/Sitting.png');
  walkingImg = loadImage('Bunny/Walking.png');
  runningImg = loadImage('Bunny/Running.png');

  eatImg = loadImage('assets/Eat.jpeg');
  boxImg = loadImage('assets/Box.jpeg');
  bedImg = loadImage('assets/Bed.jpeg');
  BirdieImg = loadImage('assets/Birdie.jpeg');
  YogurtImg = loadImage('assets/Yogurt.jpeg');
  LakeImg = loadImage('assets/Lake.jpeg');
  GardenImg = loadImage('assets/Garden.jpeg');
  soundFormats("mp3", "wav"); // 指定支持的音频格式
  sound = loadSound("assets/Game Music.mp3"); // 加载背景音乐文件

}

function setup() {
  createCanvas(800, 600).parent("sketch-container1");
  
  sound.loop(); // 循环播放背景音乐
  sound.setVolume(0.1); // 设置音量（0 到 1 之间）

  
  
  bedroomCarrots[0].displayImg = boxImg;
  bedroomCarrots[1].displayImg = eatImg;
  bedroomCarrots[2].displayImg = bedImg;

  KitchenCarrots[0].displayImg = BirdieImg;
  KitchenCarrots[1].displayImg = YogurtImg;

  BackyardCarrots[0].displayImg = GardenImg;
  BackyardCarrots[1].displayImg = LakeImg;
  


}

function draw() {
  textSize(16);
  textAlign(CENTER);
  fill(0);
  text("Click buttons to play or stop the music", width / 2, 50);

}

function draw() {
  if (scene === "start") drawStartScene();
  else if (scene === "rocketFlying") drawRocketScene();
  else if (scene === "nextScene") drawNextScene();
  else if (scene === "kitchenScene") drawKitchenScene();
  else if (scene === "backyardScene") drawBackyardScene();

  handlePlayer();
}

let startButtonVisible = true;

function drawStartScene() {
  image(planetImg, 0, 0);

  if (startButtonVisible) {
    push();
    translate(147, -50);
    image(startButton, 300, 50);
    startButton.resize(150, 0);
    pop();
  }

  if (textVisible) {
    push();
    fill(255);
    textSize(35);
    translate(45, -30);
    text("Welcome to Planet Pudding", width / 3, height / 3);
    pop();
    
      push();
    fill(255,0,0);
    textSize(10);
    translate(-170, 50);
    text("Use AWDS to Control", width / 3, height / 3);
    pop();

    push();
    fill(255);
    textSize(18);
    translate(250, 105);
    textAlign(CENTER);
    text("Your mission as Pudding", width / 3, height / 3);
    text("is to find memories of your past life", width / 3, height / 3 + 20);
    text("by collecting 🥕's'", width / 3, height / 3 + 40);
    pop();
  }

  push();
  rocket.resize(300, 0);
  translate(100, rocketY);
  image(rocket, 0, 0);
  if (carrotVisible) {
    image(carrotImg, carrotX - 100, carrotY - rocketY, 100, 40);
  }
  pop();

  drawPlayer();
}

function mousePressed() {
  if (startButtonVisible && mouseX > 447 && mouseX < 597 && mouseY > 20 && mouseY < 100) {
    startButtonVisible = false;
    textVisible = false; // Hide text when start button is clicked
  }
}

function handlePlayer() {
  movePlayer();

  if (carrotVisible && dist(playerX, playerY, carrotX, carrotY) < 40) {
    carrotVisible = false;
    startRocket();
  }
}

function drawNextScene() {
  image(bedroom, 0, 0, width, height);

  for (let carrot of bedroomCarrots) {
    if (carrot.visible) {
      image(carrotImg, carrot.x, carrot.y, carrotImg.width / 5, carrotImg.height / 5);
      if (dist(playerX, playerY, carrot.x, carrot.y) < 40) carrot.visible = false;
    } else if (carrot.displayImg) {
      image(carrot.displayImg, carrot.x, carrot.y, 100, 100);
    }
  }

  drawPlayer();

  if (playerY > height) {
    scene = "kitchenScene";
    playerX = width / 2;
    playerY = height / 2;
  }
}

function drawKitchenScene() {
  image(kitchen, 0, 0, width, height);

  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Welcome to the Kitchen!", width / 2, 50);

  for (let carrot of KitchenCarrots) {
    if (carrot.visible) {
      image(carrotImg, carrot.x, carrot.y, carrotImg.width / 5, carrotImg.height / 5);
      if (dist(playerX, playerY, carrot.x, carrot.y) < 40) carrot.visible = false;
    } else if (carrot.displayImg) {
      image(carrot.displayImg, carrot.x, carrot.y, 100, 100);
    }
  }

  drawPlayer();

  if (playerX < 0) {
    scene = "backyardScene";
    playerX = width / 2;
    playerY = height / 2;
  }
}

function drawBackyardScene() {
  image(backyard, 0, 0, width, height);

  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Welcome to the Backyard!", width / 2, 50);

  for (let carrot of BackyardCarrots) {
    if (carrot.visible) {
      image(carrotImg, carrot.x, carrot.y, carrotImg.width / 5, carrotImg.height / 5);
      if (dist(playerX, playerY, carrot.x, carrot.y) < 40) carrot.visible = false;
    } else if (carrot.displayImg) {
      image(carrot.displayImg, carrot.x, carrot.y, 100, 100);
    }
  }

  drawPlayer();
}

function movePlayer() {
  if (keyIsDown(87)) playerY -= playerSpeed;
  if (keyIsDown(65)) playerX -= playerSpeed;
  if (keyIsDown(83)) playerY += playerSpeed;
  if (keyIsDown(68)) playerX += playerSpeed;
}

function drawPlayer() {
  if (playerState === 'sitting') {
    image(sittingImg, playerX, playerY, sittingImg.width / 5, sittingImg.height / 5);
  } else if (playerState === 'walking') {
    image(walkingImg, playerX, playerY, walkingImg.width / 5, walkingImg.height / 5);
  } else if (playerState === 'running') {
    image(runningImg, playerX, playerY, runningImg.width / (5 / 1.5), runningImg.height / (5 / 1.5));
  }
}

function startRocket() {
  rocketMoving = true;
  scene = "rocketFlying";
}

function drawRocketScene() {
  image(planetImg, 0, 0);

  if (rocketMoving) rocketY -= 3;

  push();
  rocket.resize(300, 0);
  translate(100, rocketY);
  image(rocket, 0, 0);
  pop();

  if (rocketY < -300) scene = "nextScene";
}

function keyPressed() {
  if (key === 'D' || key === 'd') {
    if (playerState === 'sitting') playerState = 'walking';
    else if (playerState === 'walking') playerState = 'running';
    else if (playerState === 'running') playerState = 'sitting';
  }
}
