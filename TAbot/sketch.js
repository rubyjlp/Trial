var help = new Array("You're missing a semicolon!", "Did you close your parentheses?", "Remember to declare a variable before you use it!", "Try working out what you want to do on paper.", "Talk through your problem with someone.", "A variable is like a container for numbers or words.", "When declaring a function, inputs are placeholders for values that you can pass in later, when you invoke the function.");
var advice = help[0];
var glow = false;
var counter = 0;
var beep;

function setup() {
  beep = new p5.Oscillator();
  beep.setType('sine');
  beep.amp(0);
  beep.freq(600);
  beep.start();
  createCanvas(windowWidth, windowHeight);
  advice = help[round(random(0, (help.length - 1)))];
}

function draw() {
  background(255);
  textAlign(CENTER);
  counter++;
  //text
  fill(0);
  noStroke();
  textSize((15/700)*width);
  if (glow === true) {
    text(advice, (150/700)*width, (20/700)*width, (400/700)*width);
  }
  //antenna and neck stem
  strokeWeight((5/700)*width);
  stroke(0);
  line(width/2, (1/7)*width, width/2, (3/7)*width);
  //head
  noStroke();
  fill(150);
  arc(width/2, (225/700)*width, (80/700)*width, (80/700)*width, PI, 0, CHORD);
  rect((310/700)*width, (225/700)*width, (80/700)*width, (30/700)*width);
  //arms
  stroke(0);
  strokeWeight((5/700)*width);
  noFill();
  arc(width/2, (215/700)*width, (250/700)*width, (200/700)*width, 0, PI, OPEN);
  //legs
  stroke(0);
  strokeWeight((5/700)*width);
  line((300/700)*width, (450/700)*width, (300/700)*width, (600/700)*width);
  line((400/700)*width, (450/700)*width, (400/700)*width, (600/700)*width);
  //body
  noStroke();
  fill(150);
  rect((290/700)*width, (275/700)*width, (120/700)*width, (175/700)*width);
  //antenna bulb
  noStroke();
  fill(255, 0, 0);
  ellipse(width/2, (100/700)*width, (30/700)*width, (30/700)*width);
  if (glow === true) {
    fill(255, 0, 0, 50);
    ellipse(width/2, (100/700)*width, (45/700)*width, (45/700)*width);
  }
  //glasses
  stroke(0);
  strokeWeight((5/700)*width);
  fill(255);
  line((325/700)*width, (225/700)*width, (375/700)*width, (225/700)*width);
  ellipse((325/700)*width, (225/700)*width, (35/700)*width, (35/700)*width);
  ellipse((375/700)*width, (225/700)*width, (35/700)*width, (35/700)*width);
  point((330/700)*width, (220/700)*width);
  point((380/700)*width, (220/700)*width);
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
  if (dist(mouseX, mouseY, width/2, (100/700)*width) < 15) {
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