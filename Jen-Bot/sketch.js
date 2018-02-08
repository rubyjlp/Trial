var help = new Array("Jen, only you can change your life, nobody else can do it for you.",
"Jen, no matter how bad you do in calc, you'll never end up at City College.",
"It's called a garbage can, Jen, not a garbage cannot.",
"Work hard so you don't end up at City College, Jen!",
"Jen, you suck.","Jen, just do it.",
"Jen, if Sofia got a C+ on her chem test, it's ok if sometimes you mess up too.",
"Jen, you are a shining star.",
"Jen! Jen! Jen! Jen!",
"Jen, go running with Mia and then complain about it later!",
"It's a slow process, but quitting won't speed it up, Jen.",
"Don't watch the clock, Jen: Do what it does, keep going.",
"It always seems impossible until it's done, Jen.",
"Stay angry, Jen.",
"You can't have a better tomorrow if you're still thinking about yesterday, Jen.",
"Stay salty, Jen.",
"Good, better, best. Never let it rest. Till your good is better and your better is best, Jen.",
"Believe in yourself, Jen.",
"Believe in yourself, Jen. Nobody else does.",
"Keep your eyes on the stars, Jen, even if you're too short to reach them.",
"Let your anger fuel your running, Jen.",
"Only run for coffee, Jen.",
"When you get angry, get British, Jen.",
"Chase your dreams, Jen. Run after them.",
"Jenerate productive work.",
"Be jenerous.",
"Be jenuine.",
"Be jentle.",
"Walk jently. Don't carry a big stick.",
"Jen, don't be afraid to make bold fashion choices.",
"Jen, rock those sweatpants over jeans.");
var advice = help[0];
var glow = true;
var counter = 0;
var beep;
var phase;


function setup() {
  beep = new p5.Oscillator();
  beep.setType('sine');
  beep.amp(0);
  beep.freq(600);
  beep.start();
  createCanvas(700, 700);
  advice = help[round(random(0, (help.length - 1)))];
  //advice = help[help.length-3];
}


function draw() {
  background(255);
  textAlign(CENTER);
  counter++;
  //text
  fill(0);
  noStroke();
  textSize(15);
  if (glow === true) {
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
  beginShape();
  vertex(350, 85);
  vertex(335, 100);
  vertex(350, 115);
  vertex(365, 100);
  endShape();
  ellipse(342.5, 92.5, (15 * sqrt(2)), (15 * sqrt(2)));
  ellipse(357.5, 92.5, (15 * sqrt(2)), (15 * sqrt(2)));
  //ellipse(350, 100, 30, 30);
  if (glow === true) {
    fill(255, 0, 0, 50);
    ellipse(350, 95, 60, 60);
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
    beep.amp(0, 0.1);
  }
  if (counter > 150) {
    glow = false;
    counter = 0;
  }
  // if (phase<2){
  // phase=phase+0.1;
  // }
}

function mouseClicked() {
  if (dist(mouseX, mouseY, 350, 100) < 15) {
    counter = 0;
    advice = help[round(random(0, (help.length - 1)))];
    glow = true;
    beep.amp(1, 0.05);
  }
  //print(phase);
  //phase+=0.1;
}

function deviceShaken() {
  counter = 0;
  advice = help[round(random(0, (help.length - 1)))];
  glow = true;
  beep.amp(1, 0.05);
}