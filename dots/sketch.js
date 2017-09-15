var dotsX = [];
var dotsY = [];
var steps = 20;
var count = 0;
var pen = false;
var grow = false;
var shrink = false;

function setup() {
  createCanvas(1400, 600);
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
  if ((grow===true)&&(steps<200)){
    steps++;
  } else {
    grow=false;
  }
  if ((shrink===true)&&(steps>0)){
    steps--;
  } else {
    shrink=false;
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
  if (keyCode === 87) {
    steps++;
  } else if (keyCode === 83) {
    steps--;
  } else if (keyCode === 65){
    dotsX = [];
    dotsY = [];
    count = 0;
    pen = false;
  } else if (keyCode === 71){
    grow = true;
    shrink = false;
  } else if (keyCode === 82){
    grow = false;
    shrink = false;
    steps = 20;
  } else if (keyCode === 84){
    shrink = true;
    grow = false;
  }
}