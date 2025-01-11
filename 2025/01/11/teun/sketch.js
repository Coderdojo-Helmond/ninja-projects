function setup() {
    createCanvas(400, 400 , WEBGL);
    
    breedte = 50
  }
  
  function draw() {
    background("#008FFF");
    //circle(0,0,200);
    
   //rotateX(frameCount * 0.01);
   // rotateY(frameCount * 0.01);
     rotateX(77);
    rotateY(77);
    rotateZ(frameCount * 100000000);
    
    fill("#686A6B")
    //square(200,200,100,20);
    box()
  }