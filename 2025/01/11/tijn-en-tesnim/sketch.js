function preload(){
    font = loadFont('test.ttf')
  }
  
  function setup() {
    textFont(font);
    createCanvas(400, 400, WEBGL);
  }
  
  function draw() {
    background("blue");
  
    //rotateX(frameCount * 0.01);
  //  rotateY(frameCount * 0.03);
    //rotateZ(frameCount * 0.01);
    fill("#FFFF00")
    circle(5,109,40);
  
    fill("#FFFF00")
    square(-200,-38,60)
    fill("#000000")
    text('?', 0, 0)
    
    fill("#00FF53")
    rect(-200,130,400,50)
     fill("#A57523")
    rect(-200,150,400,50)
  }