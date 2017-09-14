var counter = 0;
var iterator = 0;

function setup() {
  createCanvas(displayWidth,displayHeight);
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
  strokeWeight(4);
  //point(350,350);
  for (var i = 0; i<=iterator; i++){
    stroke(255,255-(i*10),0);
    ellipse(displayWidth/2,displayHeight/2,(iterator-i)*10,(iterator-i)*10);
  }
  textAlign(CENTER);
  fill(255);
  stroke(255);
  strokeWeight(1);
  textSize(32);
  text("WE WERE GIANTS IN THE SUN",displayWidth/2,displayHeight/2);
}