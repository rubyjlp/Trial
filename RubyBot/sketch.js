var help = new Array( "Try working out what you want to do on paper.", "Talk through your problem with someone.", "I love you.", "You're really cute.", "Try taking a nap.", "Remember to eat.","Have a glass of water.", "Look at the moon!","You're really great", "Love you to pieces.");
var advice = help[0];
var glow = true;
var counter = 0;
var beep;
var phase;
function preload(){
    loadJSON("https://api.darksky.net/forecast/ad57d4aab1a05fcc8e987a952d9faeaf/37.740379,-122.416866", gotData, 'jsonp');
}

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

function gotData(data){
  //console.log(data);
  phase = data.daily.data[0].moonPhase;
  if (phase>0.5){
    phase=1-phase;
  }
  phase=phase*2;//.daily.data[0].moonPhase;
  // for (i=0; i<data.articles.length; i++){
  //   a++;
  //   if ((data.articles[i].title.indexOf("Trump"))>(-1)||(data.articles[i].title.indexOf("Republican"))>(-1)){
  //     t++;
  //     //console.log((data.articles[i].title.indexOf("Trump")))
  //   }
  // }
}

function draw() {
  background(255);
  if((advice=="Look at the moon!")&&(glow===true)){
    background(15, 35, 68);
    fill(255);
    noStroke();
    moon(100,150);
    //stroke(1);
    fill(255);
    text("Powered by Dark Sky",500,600);
  }
  textAlign(CENTER);
  counter++;
  //text
  fill(0);
  noStroke();
  textSize(15);
  if (glow === true) {
    if(advice=="Look at the moon!"){
    fill(255);
  }
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
  vertex(350,85);
  vertex(335,100);
  vertex(350,115);
  vertex(365,100);
  endShape();
  ellipse(342.5,92.5,(15*sqrt(2)),(15*sqrt(2)));
  ellipse(357.5,92.5,(15*sqrt(2)),(15*sqrt(2)));
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
    beep.amp(0,0.1);
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
    counter=0;
    advice = help[round(random(0, (help.length - 1)))];
    glow = true;
    beep.amp(1,0.05);
  }
  //print(phase);
  //phase+=0.1;
}

function deviceShaken() {
    counter=0;
    advice = help[round(random(0, (help.length - 1)))];
    glow = true;
    beep.amp(1,0.05);
}

function moon(x,y){
  fill(255);
  arc(x, y, 100, 100, HALF_PI, PI+HALF_PI, OPEN);
  if(phase<0.5){
  fill(15, 35, 68);
  }else{
    fill(255);
  }
  arc(x, y, 100*(1-phase), 100, HALF_PI, PI+HALF_PI, OPEN);
}

