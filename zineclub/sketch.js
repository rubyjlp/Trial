var font;

function preload(){
  console.log("load");
  font = loadFont("go around the books.ttf");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  textFont(font);
  textSize(32);
  textAlign(CENTER);
  //background(255);
  for (i=0;i<8;i++){
    noFill();
   wobbleRect((width/2)-120,120,240,140,random(0,15)); 
  }
  fill(0);
  text("zine club",width/2,208);
  textSize(24);
  text("tutorial",width/2,300);
  text("day 3",width/2,330);
  text("room 3",width/2,360);
}

function draw() {
  
}

function wobbleRect(x,y,w,h,wobble){
  beginShape();
  vertex(x+random(-1*wobble,wobble), y+random(-1*wobble,wobble));
  bezierVertex(x+random(-1*wobble,wobble), y+random(-1*wobble,wobble), x+random(-1*wobble,wobble), y+(h/2)+random(-1*wobble,wobble), x+random(-1*wobble,wobble), y+h+random(-1*wobble,wobble));
  bezierVertex(x+random(-1*wobble,wobble),y+h+random(-1*wobble,wobble),x+(w/2)+random(-1*wobble,wobble),y+h+random(-1*wobble,wobble),x+w+random(-1*wobble,wobble),y+h+random(-1*wobble,wobble));
  bezierVertex(x+w+random(-1*wobble,wobble),y+h+random(-1*wobble,wobble),x+w+random(-1*wobble,wobble),y+(h/2)+random(-1*wobble,wobble),x+w+random(-1*wobble,wobble),y+random(-1*wobble,wobble));
  bezierVertex(x+w+random(-1*wobble,wobble),y+random(-1*wobble,wobble),x+(w/2)+random(-1*wobble,wobble),y+random(-1*wobble,wobble),x+random(-1*wobble,wobble),y+random(-1*wobble,wobble));
  vertex(x+random(-1*wobble,wobble), y+random(-1*wobble,wobble));
  endShape();
}

function mouseClicked(){
  background(255);
  textFont(font);
  textSize(32);
  textAlign(CENTER);
  //background(255);
  for (i=0;i<8;i++){
    noFill();
   wobbleRect((width/2)-120,120,240,140,random(0,15)); 
  }
  fill(0);
  text("zine club",width/2,208);
  textSize(24);
  text("tutorial",width/2,300);
  text("day 3",width/2,330);
  text("room 3",width/2,360);
}

function windowResized() {//if the window is resized, it sizes the canvas to the new window height
  resizeCanvas(windowWidth, windowHeight);
  background(255);
  textFont(font);
  textSize(32);
  textAlign(CENTER);
  //background(255);
  for (i=0;i<8;i++){
    noFill();
   wobbleRect((width/2)-120,120,240,140,random(0,15)); 
  }
  fill(0);
  text("zine club",width/2,208);
  textSize(24);
  text("tutorial",width/2,300);
  text("day 3",width/2,330);
  text("room 3",width/2,360);
}