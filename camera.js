

let capture;
let tracker;
let positions;
let features; 

function setup() {
  
 
    // load p5 functions:
    createCanvas(windowWidth, windowHeight);
  
    capture = createCapture(VIDEO);
    capture.elt.setAttribute('playsinline', ''); 
    capture.size(width, height);
    capture.hide();

    // load clmtrackr functions:
    tracker = new clm.tracker(); // create a new clmtrackr object
    tracker.init(); // initialize the object
    tracker.start(capture.elt); // start tracking the video element capture.elt
}

function draw() {
      translate(width, 0);
    scale(-1,1); 

    image(capture, 0, 0, width, height);
    let positions = tracker.getCurrentPosition(); 

 
 
    console.log(positions); // uncomment to see the list of arrays
  
    // draw face outline points
 
   for (let i = 0; i < positions.length; i++) {
  ellipse(positions[i][0], positions[i][1], 4, 4);
  text(i, positions[i][0], positions[i][1]);

     
    if(positions.length > 0) {
    noStroke();
      
      
            //Around Mouth
      fill('rgb(153,212,255)');
      beginShape();
      for (let i = 1; i <= 13; i++) {
        vertex(positions[i][0], positions[i][1]);
      }
     endShape(CLOSE);
      
      //jawrrgb(105,204,236)
      fill('rgb(107,219,255)');
      beginShape();
      for (let i = 3; i <= 11; i++) {
        vertex(positions[i][0], positions[i][1]);
      }
     endShape(CLOSE);
}
     
 fill('rgb(240,192,128)');
  beginShape();

  
  vertex(positions[1][0], positions[1][1]);
  vertex(positions[0][0], positions[0][1]);
  vertex(positions[20][0], positions[20][1]);
     vertex(positions[22][0], positions[22][1]);
     vertex(positions[18][0], positions[18][1]);
   vertex(positions[15][0], positions[15][1]);
     vertex(positions[14][0], positions[14][1]);
     vertex(positions[13][0], positions[13][1]);
  endShape(CLOSE);

     
// Example: Left eye
    fill('black');
    beginShape();
    for (let i = 23; i <= 26; i++) {
      vertex(positions[i][0], positions[i][1]);
    }
    endShape(CLOSE);
     
  
    // Example: Right eye
    fill('black');
    beginShape();
    for (let i = 28; i <= 31; i++) {
      vertex(positions[i][0], positions[i][1]);
    }
    endShape(CLOSE)
     
     
     
     
     
     // Right Cheek
     
 fill('lightcoral');
  beginShape();
  vertex(positions[1][0], positions[1][1]);
  vertex(positions[2][0], positions[2][1]);
  vertex(positions[3][0], positions[3][1]);
   vertex(positions[33][0], positions[29][1]);
  endShape(CLOSE);
     

     
     // Left cheek
  fill('lightcoral');
  beginShape();
  vertex(positions[11][0], positions[11][1]);
  vertex(positions[12][0], positions[12][1]);
  vertex(positions[13][0], positions[13][1]);
  vertex(positions[33][0], positions[27][1]);
  endShape(CLOSE);
     
     
  //Fore head
  fill('lemonchiffon');
noStroke();

// Use fixed coordinates based on face center
let centerX = (positions[0][0] + positions[14][0]) / 2;
let centerY = positions[0][1] ; // Adjust height as needed

arc(centerX, centerY, 200, 200, PI, 0);
     
   
     // Red nose
fill('rgb(239,123,123)');
noStroke();

let noseTip = positions[62];
ellipse(noseTip[0], noseTip[1], 50, 50); // You can change the size if you like!

     
    
// Yelrgb(255,255,179)eek spheres centered on the cheek area
fill('rgb(252,229,166)');
noStroke();


let leftCheekX = (positions[1][0] + positions[2][0] + positions[29][0]) / 3;
let leftCheekY = (positions[1][1] + positions[2][1] + positions[29][1]) / 3;
ellipse(leftCheekX, leftCheekY, 60, 40);


let rightCheekX = (positions[12][0] + positions[13][0] + positions[27][0]) / 3;
let rightCheekY = (positions[12][1] + positions[13][1] + positions[27][1]) / 3;
ellipse(rightCheekX, rightCheekY, 60, 40);

// Mouth
fill('rgb(253,144,144)');
noStroke();

beginShape();
for (let i = 44; i <= 55; i++) {
  vertex(positions[i][0], positions[i][1]);
}
endShape(CLOSE);

// Left eyebrow
fill('#844646'); // or 'saddlebrown' for a natural look
noStroke();
beginShape();
for (let i = 15; i <= 18; i++) {
  vertex(positions[i][0], positions[i][1]);
}
endShape(CLOSE);

// Right eyebrow
fill('rgb(136,72,72)');
beginShape();
for (let i = 19; i <= 22; i++) {
  vertex(positions[i][0], positions[i][1]);
}
endShape(CLOSE);

    
  
     }
  }