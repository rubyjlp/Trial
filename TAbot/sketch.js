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
  createCanvas(700, 700);
  advice = help[round(random(0, (help.length - 1)))];
}

function draw() {
  background(255);
  textAlign(CENTER);
  counter++;
  //text
  fill(0);
  noStroke();
  textSize(15);
  if (glow == true) {
    text(advice, 150, 20, 400);
  }
  //antenna and neck stem
  strokeWeight(5);
  stroke(0);
  line(350, 100, 350, 300);
  //head
  noStroke();
  fill(150);
  arc(350, 225, 80, 80, PI, 0, CHORD);
  rect(310, 225, 80, 30);
  //arms
  stroke(0)
  strokeWeight(5);
  noFill();
  arc(350, 215, 250, 200, 0, PI, OPEN);
  //legs
  stroke(0);
  strokeWeight(5);
  line(300, 450, 300, 600);
  line(400, 450, 400, 600);
  //body
  noStroke();
  fill(150);
  rect(290, 275, 120, 175);
  //antenna bulb
  noStroke();
  fill(255, 0, 0);
  ellipse(350, 100, 30, 30);
  if (glow == true) {
    fill(255, 0, 0, 50);
    ellipse(350, 100, 45, 45);
  }
  //glasses
  stroke(0);
  strokeWeight(5);
  fill(255);
  line(325, 225, 375, 225);
  ellipse(325, 225, 35, 35);
  ellipse(375, 225, 35, 35);
  point(330, 220);
  point(380, 220);
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
  if (dist(mouseX, mouseY, 350, 100) < 15) {
    counter=0;
    advice = help[round(random(0, (help.length - 1)))];
    glow = true;
    beep.amp(1,0.05);
  }
}