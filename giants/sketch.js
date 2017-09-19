var counter = 0;
var iterator = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  if (mouseIsPressed){
    counter++;
  } else {
    if (counter>0){
      counter--;
    }
  }
  iterator=round(counter/10);
  ellipseMode(CENTER);
  noFill();
  stroke(255,0,0);
  strokeWeight((height/160)-(height/600));
  //point(350,350);
  for (var i = 0; i<=iterator; i++){
    stroke(255,255-(i*5),0);
    ellipse(width/2,height/2,(iterator-i)*height/80,(iterator-i)*height/80);
  }
  textAlign(CENTER);
  fill(255);
  stroke(255);
  strokeWeight(1);
  textSize(height/20);
  text("WE WERE GIANTS IN THE SUN",width/2,(height/2)+(height/40));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}