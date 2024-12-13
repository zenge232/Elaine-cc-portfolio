function setup() {
  
    createCanvas(windowWidth, windowHeight).parent("sketch-container1");
    
    //background green 
    
     background(200, 230, 200);
  
    
    // left candy triangle
    push()
    fill(65,105,225)
    stroke(65,105,225)
    strokeWeight(3)
    translate(150, 80)
    rotate(1.9)
    triangle(30, 75, 58, 20, 86, 75);
    pop()
    
     // right candy triangle
    push()
    fill(65,105,225)
    stroke(65,105,225)
    strokeWeight(3)
    translate(130, 190)
    rotate(-1.3)
    triangle(30, 75, 58, 20, 86, 75);
    pop()
    
    //candy body;
  
    push()
    stroke(240,248,255)
    strokeWeight(5)
    fill(240,248,255)
    translate(20, 5)
    rotate(0.2)
    ellipse(140, 100, 100, 50);
    pop()
    
   
    
    //milk top 
    push()
    stroke(65,105,225)
    strokeWeight(1.5)
    translate(123, 90)
    rotate(0.3)
    quad(14, 13, 34, 13, 38, 33, 8, 32);
    pop()
   
      //milk body 
    push()
    stroke(65,105,225)
    strokeWeight(1.5)
    translate(115, 108)
    rotate(0.3)
    quad(10, 13, 40, 13, 38, 33, 8, 32);
    pop()
  
     //text milk japanese 
    push()
      textSize(22);
    fill('red');
    stroke(4)
    stroke(220,20,60)
    translate(65, 70)
    rotate(0.2)
    text('ミルク', 50, 50);
    pop()
    
      //bottom of can 
    push()
    stroke(220,20,60)
    strokeWeight(5)
    fill(255,255,255)
    translate(windowWidth/2, windowHeight/2)
    rotate(PI/-30)
    rectMode(CENTER)
    ellipse(100, 150, 389, 100)
    noFill(175)
    noStroke()
    pop()
    
    // rectangle can body 
    
    push()
    stroke(255,255,255)
    strokeWeight(5)
    fill(255,255,255)
    translate(windowWidth/2, windowHeight/2)
    rotate(PI/-30)
    rectMode(CENTER)
    rect(100, 22, 389, 250)
    noFill(175)
    pop() 
    
      //top of can 
    push()
    stroke(220,20,60)
    fill(245,245,245)
    strokeWeight(5)
    translate(windowWidth/2, windowHeight/2)
    rotate(PI/-30)
    rectMode(CENTER)
    ellipse(100, -100, 389, 100)
    noFill(175)
    pop()
  
     //top of can 
    push()
    stroke(173,216,230)
    fill(255,255,224)
    strokeWeight(0)
    translate(windowWidth/2, windowHeight/2)
    rotate(PI/-30)
    rectMode(CENTER)
    ellipse(100, 30, 250, 90)
    noFill(175)
    pop()
      
     //text milk japanese 
    push()
      textSize(50);
    fill('blue');
    stroke(4)
    stroke(220,20,60)
    translate(windowWidth/2, windowHeight/2)
    rotate(PI/-30)
    rectMode(CENTER)
    text('北海道', 20, 50);
    pop()
    
       //text Candy japanese 
    push()
      textSize(30);
    fill('red');
    stroke(4)
    stroke(220,20,60)
    translate(windowWidth/2, windowHeight/2)
    rotate(PI/-30)
    rectMode(CENTER)
    text('キャンディ', 24, 100);
    pop()
    
    
     //pluck
    push()
    fill(211,211,211)
    stroke(65,105,225)
    strokeWeight(3)
    translate(windowWidth/2, windowHeight/2)
    rotate(PI/-30)
    rectMode(CENTER)
    ellipse(0, -100, 80, 50)
    noFill(175)
    pop()
  
  }
  
  