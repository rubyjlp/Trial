var stretch = 7;
var clicked = false;
var fall = 0;
var lids = 0;
var blink = false;
var dir = false;
var StarX = new Array(300, 500, 700, 100, 698, 1209, 1350);
var StarY = new Array(100, 400, 250, 300, 498, 286, 509);
var tremorX = 0;
var tremorY = 0;
var font;
// var words = new Array("stare into the eye of the night", "you cannot dry her tears");
// var written;

// function preload() {
//   font = loadFont("fonts/Wreak Havoc.otf");
// }

function setup() {
  createCanvas(1450, 700);
  //written = 0;
}

function draw() {
  tremorX = random(-1, 1);
  tremorY = random(-1, 1);
  stretch = random(5, 7);
  background(0);
  noStroke();
  fill(255);
  ellipse(150 + random(-1, 1), 150 + random(-1, 1), 100 + random(-1, 1), 100 + random(-1, 1));
  fill(0);
  ellipse(170 + random(-1, 1), 150 + random(-1, 1), 100 + random(-1, 1), 100 + random(-1, 1));

  eye(600, 150, tremorX, tremorY);
  eye(750, 150, tremorX, tremorY);

  if (clicked === false) {
    star(600, 150, stretch, 255, 0);
    star(750, 150, stretch, 255, 0);
  } else {
    star(600, 150 + fall, random(3, 6), 255, 0);
    star(750, 150 + fall, random(3, 6), 255, 0);
    fall += random(1, 4);
  }
  if (lids == 200) {
    dir = true;
  }
  if (blink === true) {
    if (dir === false) {
      lids++;

    } else {
      lids--;
      if (lids === 0) {
        blink = false;
      }
    }
  }

  if ((150 + fall) >= height) {
    clicked = false;
    fall = 0;
  }
  //star(400,800,stretch);


  //star(450,300,stretch);
  //star(450, 300, stretch, 255, 0);

  eyelid(600, 150, tremorX, tremorY);
  eyelid(750, 150, tremorX, tremorY);
  for (var p = 0; p < StarX.length; p++) {
    star(StarX[p], StarY[p], random(3, 7), 255, 0);
  }
  // if (((dist(mouseX, mouseY, 600, 150) <= 25) || (dist(mouseX, mouseY, 750, 150) <= 25))&&lids===0) {
  //   fill(255, 255, 255);
  //   textAlign(CENTER);
  //   textSize(70);
  //   textFont(font);
  //   text(words[written], 700 + random(-1, 1), 500 + random(-1, 1));
  // }
}

function star(r, d, pull, col, str) {
  strokeWeight(str);
  fill(col, col, col);
  beginShape();
  vertex((r - 3) - pull + random(-1, 1), d + random(-1, 1));
  vertex((r - 1) + random(-1, 1), (d - 2) + random(-1, 1));
  vertex((r + 1) + random(-1, 1), (d - 6) - stretch + random(-1, 1));
  vertex((r + 3) + random(-1, 1), (d - 2) + random(-1, 1));
  vertex((r + 5) + pull + random(-1, 1), d + random(-1, 1));
  vertex((r + 3) + random(-1, 1), (d + 2) + random(-1, 1));
  vertex((r + 1) + random(-1, 1), (d + 6) + pull + random(-1, 1));
  vertex((r - 1) + random(-1, 1), (d + 2) + random(-1, 1));
  endShape();
}

function eye(x, y, shakeX, shakeY) {
  stroke(0);
  strokeWeight(2);
  fill(255);
  beginShape();
  vertex(x - 50 + shakeX, y + shakeY);
  bezierVertex(x - 50 + shakeX, y + shakeY, x, y - 50, x + 50 + shakeX, y + shakeY);
  bezierVertex(x + 50 + shakeX, y + shakeY, x, y + 50, x - 50 + shakeX, y + shakeY);
  endShape();

  noStroke;
  fill(0);
  ellipse(x + random(-1, 1), y + random(-1, 1), 35 + random(-1, 1), 35 + random(-1, 1));
}

function eyelid(x, y, shakeX, shakeY) {
  //strokeWeight(2);
  noStroke();
  fill(0);
  beginShape();
  vertex(x - 50, y);
  bezierVertex(x - 50 + shakeX, y + shakeY, x, y - 50, x + 50 + shakeX, y + shakeY);
  bezierVertex(x + 50 + shakeX, y + shakeY, x, y - 50 + lids, x - 50 + shakeX, y + shakeY);
  endShape();
}

function mouseClicked() {
  clicked = true;
  dir = false;
  blink = true;
  //written = floor(random(0,words.length));
  // StarX.push(mouseX);
  // StarY.push(mouseY);
  // StarX.shift();
  // StarY.shift();
}