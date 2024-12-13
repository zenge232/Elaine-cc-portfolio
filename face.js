function setup() {
    createCanvas(400, 400).parent("sketch-container1");
  
    background(200);
    background(35);
  }
  
  
  function draw(){
    
    push()
    //right eye 
    fill(255, 255, 255)
    translate (200, 100)
    rotate(-0.2)
    let rightPupilX = map(mouseX, 0, width, -20, 20); 
    let rightPupilY = map(mouseY, 0, height, -10, 10); // Pupil follows mouse Y within bounds
    arc(50, 50, 80, 80, 0, HALF_PI + HALF_PI);
    pop()
    
      push()
    //rightPupil 
    fill(0)
    translate (200, 100)
    rotate(-0.2)
    arc(60, 50, 40, 40, 0, HALF_PI + HALF_PI);
    pop()
  
    push()
    //left eye 
    fill(255, 255, 255)
    translate (60, 80)
    rotate(0.180)
    arc(40, 50, 80, 80, 0, HALF_PI + HALF_PI);
    pop()
    
      push()
    //leftpupil  
    fill(0)
    translate (60, 80)
    rotate(0.180)
    let leftPupilX = map(mouseX, 0, width, -20, 20); // Pupil follows mouse X within bounds
    let leftPupilY = map(mouseY, 0, height, -10, 10); // Pupil follows mouse Y within bound
    arc(50, 50, 40, 40, 0, HALF_PI + HALF_PI);
    pop()
    
  
   
     // Style the arc.
    noStroke();
    fill(255, 255, 0);
  
      // Update start and stop angles
    let biteSize = PI / 2;
    let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
    let endAngle = HALF_PI - startAngle;
  
    // Draw the arc.
    push();
    rotate(-0.5);
    translate(-45,60);
    arc(80, 250, 80, 80, startAngle, endAngle, PIE);
    pop();
  
  
    
      push ()
   let r = random(255)
   let g = random(255)
   let b = random(255)
   let size = random(10, 50)
   let x = random(width)
   let y = random(height)
    
    fill(r, g,b, 500)
    
    
    rotate ()
    rect(x, y, size)
    
  
  }