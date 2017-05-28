var dotsX = [];
var dotsY = [];
var steps = 20;
var count = 0;
var pen = false;

function setup() {
  createCanvas(1400, 500);
  fill(0);
  strokeWeight(1);
}

function draw() {
  if (pen === true) {
    dotsX[count] = mouseX;
    dotsY[count] = mouseY;
    count++;
  } else {
    dotsX[count] = 0;
    dotsY[count] = 0;
    count++;
  }
  background(255);
  for (var i = 0; i < dotsX.length; i++) {
    //ellipse(dotsX[i],dotsY[i],5,5);
    if (i >= steps) {
      if (((dotsX[i] === 0) && (dotsY[i] === 0)) || ((dotsX[i - steps] === 0) && (dotsY[i - steps] === 0))) {} else {
        line(dotsX[i], dotsY[i], dotsX[i - steps], dotsY[i - steps]);
      }
    }
  }
  //steps=steps+round(random(-2,2));
}

function mouseClicked() {
  if (pen === false) {
    pen = true;
  } else {
    pen = false;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    steps++;
  } else if (keyCode === DOWN_ARROW) {
    steps--;
  } else if (keyCode === LEFT_ARROW){
    dotsX = [];
    dotsY = [];
    count = 0;
    pen = false;
  }
}
