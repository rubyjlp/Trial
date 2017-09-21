var shake = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  fill(200,200,255);
  noStroke();
  wobbleRect((width/2)-100,(height/2)-100,200,200,shake);
  stroke(0);
  strokeWeight(1);
  noFill();
  //wobbleRect(200,200,200,200,30);
  wobbleRect((width/2)-100,(height/2)-100,200,200,shake);
  //wobbleRect(200,200,200,200,10);
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
  shake++;
  background(255);
  fill(200,200,255);
  noStroke();
  wobbleRect((width/2)-100,(height/2)-100,200,200,shake);
  stroke(0);
  strokeWeight(1);
  noFill();
  //wobbleRect(200,200,200,200,30);
  wobbleRect((width/2)-100,(height/2)-100,200,200,shake);
}

function deviceShaken(){
  shake++;
  background(255);
  fill(200,200,255);
  noStroke();
  wobbleRect((width/2)-100,(height/2)-100,200,200,shake);
  stroke(0);
  strokeWeight(1);
  noFill();
  //wobbleRect(200,200,200,200,30);
  wobbleRect((width/2)-100,(height/2)-100,200,200,shake);
}