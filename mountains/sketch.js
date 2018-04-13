var level = 1;
var levelHeight = 0;
var c = 50;
var drop = 5;
var pts = [];
function setup() {
  createCanvas(500, 500);
  mountains();
}

function draw() {

}

function mouseClicked() {
  mountains();
}

function deviceShaken() {
  mountains();
}

function mountains(){
    level = 1;
  levelHeight = 0.2;
  //drop = 5;
  resizeCanvas(windowWidth, windowHeight);
  c = random(0,360);
  //colorMode(RGB);
  strokeWeight(1.5);
 // stroke(255);
  colorMode(HSL);
  //noStroke();
  stroke(c, 64, 95);
  background(c, 64, 95);
  while ((level * 100) < height) {
    pts=[];
    fill(c, 64, 95 - map(level,0,height/100,0,20));
   
    beginShape();
    vertex(-100, height);
    vertex(-100, height);
    vertex(-100, 100 * level);
    vertex(-100, 100 * level);
    curveVertex(-100, 100 * level);
    for (var i = 0;(i * 100) < (width+100); i++) {
      append(pts, random(-5,5));
      append(pts, random(25,75));
      append(pts, random(-50,50));
      curveVertex(i * 100, (level * 100) + pts[pts.length-3]);
      curveVertex((i * 100) + pts[pts.length-2], (level * 100) + pts[pts.length-1]);
    }
    //curveVertex(width, 100 * level);
    vertex(width+100, 100 * level);
    vertex(width+100, 100 * level);
    vertex(width+100, height);
    vertex(width+100, height);
    endShape();
    
    for (var desc = ((level*100)+12); desc<height+100; desc+=12){
      //print(level);
    beginShape();
    vertex(-100, height+100);
    vertex(-100, height+100);
    vertex(-100, desc);
    vertex(-100, desc);
    curveVertex(-100, desc);
    for (var b = 0;(b * 100) < (width+100); b++) {
      curveVertex(b * 100, desc + pts[((b+1)*3)-3]);
      curveVertex((b * 100) + pts[((b+1)*3)-2], desc + pts[((b+1)*3)-1]);
      
    }
    //curveVertex(width, 100 * level);
    vertex(width+100, desc);
    vertex(width+100, desc);
    vertex(width+100, height);
    vertex(width+100, height);
    endShape();
    }
    
    level+=(levelHeight+random(-0.1,0.1));
    // noFill();
    // strokeWeight(5);
    // rect(0,0,width,height);
    // strokeWeight(1);
  }
}