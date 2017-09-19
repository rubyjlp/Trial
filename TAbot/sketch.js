var help = new Array("You're missing a semicolon!", "Did you close your parentheses?", "Remember to declare a variable before you use it!", "Try working out what you want to do on paper.", "Talk through your problem with someone.", "A variable is like a container for numbers or words.", "When declaring a function, inputs are placeholders for values that you can pass in later, when you invoke the function.");
var advice = "Click my antenna or shake your phone for advice.";
var glow = true;
var counter = 0;
var beep;

function setup() {
  beep = new p5.Oscillator();
  beep.setType('sine');
  beep.amp(0);
  beep.freq(600);
  beep.start();
  createCanvas(windowWidth, windowHeight);
  //advice = help[round(random(0, (help.length - 1)))];
}

function draw() {
  background(255);
  textAlign(CENTER);
  counter++;
  //text
  fill(0);
  noStroke();
  textSize((18/700)*height);
  if (glow === true) {
    text(advice, 0, (20/700)*height, width);
  }
  //antenna and neck stem
  strokeWeight((5/700)*height);
  stroke(0);
  line(width/2, (1/7)*height, width/2, (3/7)*height);
  //head
  noStroke();
  fill(150);
  arc(width/2, (225/700)*height, (80/700)*height, (80/700)*height, PI, 0, CHORD);
  rect((width/2)+((-40/700)*height), (225/700)*height, (80/700)*height, (30/700)*height);
  //arms
  stroke(0);
  strokeWeight((5/700)*height);
  noFill();
  arc(width/2, (215/700)*height, (250/700)*height, (200/700)*height, 0, PI, OPEN);
  //legs
  stroke(0);
  strokeWeight((5/700)*height);
  line((width/2)+((-50/700)*height), (450/700)*height, (width/2)+((-50/700)*height), (600/700)*height);
  line((width/2)+((50/700)*height), (450/700)*height, (width/2)+((50/700)*height), (600/700)*height);
  //body
  noStroke();
  fill(150);
  rect((width/2)+((-60/700)*height), (275/700)*height, (120/700)*height, (175/700)*height);
  //antenna bulb
  noStroke();
  fill(255, 0, 0);
  ellipse(width/2, (100/700)*height, (30/700)*height, (30/700)*height);
  if (glow === true) {
    fill(255, 0, 0, 50);
    ellipse(width/2, (100/700)*height, (45/700)*height, (45/700)*height);
  }
  //glasses
  stroke(0);
  strokeWeight((5/700)*height);
  fill(255);
  line((width/2)+((-25/700)*height), (225/700)*height, (width/2)+((25/700)*height), (225/700)*height);
  ellipse((width/2)+((-25/700)*height), (225/700)*height, (35/700)*height, (35/700)*height);
  ellipse((width/2)+((25/700)*height), (225/700)*height, (35/700)*height, (35/700)*height);
  point((width/2)+((30/700)*height), (220/700)*height);
  point((width/2)+((-20/700)*height), (220/700)*height);
  //counter
  if (counter > 10) {
    beep.amp(0,0.1);
  }
  if (counter > 150) {
    glow = false;
    counter = 0;
  }
}

function mouseClicked() {
  if (dist(mouseX, mouseY, width/2, (100/700)*height) < 15) {
    counter=0;
    advice = help[round(random(0, (help.length - 1)))];
    glow = true;
    beep.amp(1,0.05);
  }
}

function deviceShaken() {
    counter=0;
    advice = help[round(random(0, (help.length - 1)))];
    glow = true;
    beep.amp(1,0.05);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}