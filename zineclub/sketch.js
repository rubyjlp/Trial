var font;

function preload() {
  //console.log("load");
  font = loadFont("go around the books.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  refresh();
}

function draw() {

}

function mouseClicked() {
  refresh();
}

function deviceShaken() {
  refresh();
}

function windowResized() { //if the window is resized, it sizes the canvas to the new window height
  resizeCanvas(windowWidth, windowHeight);
  refresh();
}

function wobbleEllipse(x, y, w, h, wobble) {
  // strokeWeight(5);
  // point(x-(2*w)+random(wobble*-1,wobble),y+h+random(wobble*-1,wobble));
  // point(x+(2*w)+random(wobble*-1,wobble),y+h+random(wobble*-1,wobble));
  // point(x+random(wobble*-1,wobble),y-(h/2)+random(wobble*-1,wobble));
  // point(x+random(wobble*-1,wobble),y-(h/2)+random(wobble*-1,wobble));
  // strokeWeight(2);
  // noFill();
  //bezier(x+random(wobble*-1,wobble),y-(h/2)+random(wobble*-1,wobble),x-(2*w)+random(wobble*-1,wobble),y+h+random(wobble*-1,wobble),x+(2*w)+random(wobble*-1,wobble),y+h+random(wobble*-1,wobble),x+random(wobble*-1,wobble),y-(h/2)+random(wobble*-1,wobble));
  curveTightness(-0.75);
  var ver = ceil(random(0, 4))
  if (ver == 1) {
    beginShape();
    curveVertex(x + random(wobble * -1, wobble), y - (h / 2) + random(wobble * -1, wobble));
    curveVertex(x + (w / 2) + random(wobble * -1, wobble), y + random(wobble * -1, wobble));
    curveVertex(x + random(wobble * -1, wobble), y + (h / 2) + random(wobble * -1, wobble));
    curveVertex(x - (w / 2) + random(wobble * -1, wobble), y + random(wobble * -1, wobble));

    curveVertex(x + random(wobble * -1, wobble), y - (h / 2) + random(wobble * -1, wobble));
    curveVertex(x + (w / 2) + random(wobble * -1, wobble), y + random(wobble * -1, wobble));
    curveVertex(x + random(wobble * -1, wobble), y + (h / 2) + random(wobble * -1, wobble));

    endShape();
  }
  if (ver == 2) {
    beginShape();
    curveVertex(x - (w / 2) + random(wobble * -1, wobble), y + random(wobble * -1, wobble));
    curveVertex(x + random(wobble * -1, wobble), y - (h / 2) + random(wobble * -1, wobble));
    curveVertex(x + (w / 2) + random(wobble * -1, wobble), y + random(wobble * -1, wobble));
    curveVertex(x + random(wobble * -1, wobble), y + (h / 2) + random(wobble * -1, wobble));

    curveVertex(x - (w / 2) + random(wobble * -1, wobble), y + random(wobble * -1, wobble));
    curveVertex(x + random(wobble * -1, wobble), y - (h / 2) + random(wobble * -1, wobble));
    curveVertex(x + (w / 2) + random(wobble * -1, wobble), y + random(wobble * -1, wobble));

    endShape();
  }
  if (ver == 3) {
    beginShape();
    curveVertex(x + random(wobble * -1, wobble), y + (h / 2) + random(wobble * -1, wobble));
    curveVertex(x - (w / 2) + random(wobble * -1, wobble), y + random(wobble * -1, wobble));
    curveVertex(x + random(wobble * -1, wobble), y - (h / 2) + random(wobble * -1, wobble));
    curveVertex(x + (w / 2) + random(wobble * -1, wobble), y + random(wobble * -1, wobble));

    curveVertex(x + random(wobble * -1, wobble), y + (h / 2) + random(wobble * -1, wobble));
    curveVertex(x - (w / 2) + random(wobble * -1, wobble), y + random(wobble * -1, wobble));
    curveVertex(x + random(wobble * -1, wobble), y - (h / 2) + random(wobble * -1, wobble));

    endShape();
  }
  if (ver == 4) {
    beginShape();
    curveVertex(x + (w / 2) + random(wobble * -1, wobble), y + random(wobble * -1, wobble));
    curveVertex(x + random(wobble * -1, wobble), y + (h / 2) + random(wobble * -1, wobble));
    curveVertex(x - (w / 2) + random(wobble * -1, wobble), y + random(wobble * -1, wobble));
    curveVertex(x + random(wobble * -1, wobble), y - (h / 2) + random(wobble * -1, wobble));

    curveVertex(x + (w / 2) + random(wobble * -1, wobble), y + random(wobble * -1, wobble));
    curveVertex(x + random(wobble * -1, wobble), y + (h / 2) + random(wobble * -1, wobble));
    curveVertex(x - (w / 2) + random(wobble * -1, wobble), y + random(wobble * -1, wobble));

    endShape();
  }
}

function wobbleRect(x, y, w, h, wobble) {
  beginShape();
  vertex(x + random(-1 * wobble, wobble), y + random(-1 * wobble, wobble));
  bezierVertex(x + random(-1 * wobble, wobble), y + random(-1 * wobble, wobble), x + random(-1 * wobble, wobble), y + (h / 2) + random(-1 * wobble, wobble), x + random(-1 * wobble, wobble), y + h + random(-1 * wobble, wobble));
  bezierVertex(x + random(-1 * wobble, wobble), y + h + random(-1 * wobble, wobble), x + (w / 2) + random(-1 * wobble, wobble), y + h + random(-1 * wobble, wobble), x + w + random(-1 * wobble, wobble), y + h + random(-1 * wobble, wobble));
  bezierVertex(x + w + random(-1 * wobble, wobble), y + h + random(-1 * wobble, wobble), x + w + random(-1 * wobble, wobble), y + (h / 2) + random(-1 * wobble, wobble), x + w + random(-1 * wobble, wobble), y + random(-1 * wobble, wobble));
  bezierVertex(x + w + random(-1 * wobble, wobble), y + random(-1 * wobble, wobble), x + (w / 2) + random(-1 * wobble, wobble), y + random(-1 * wobble, wobble), x + random(-1 * wobble, wobble), y + random(-1 * wobble, wobble));
  vertex(x + random(-1 * wobble, wobble), y + random(-1 * wobble, wobble));
  endShape();
}

function wobbleShape(co, wobble) {
  beginShape();
  vertex(co[0], co[1]);
  for (c = 0; c < co.length; c = c + 2) {
    wobbleLine(co[c], co[c + 1], co[c + 2], co[c + 3], wobble);
    //console.log(c);
  }
  //vertex(co[co.length-2],co[co.length-1]);
  endShape();
}

function wobbleLine(x1, y1, x2, y2, wobble) {
  //vertex(x1+random(-1*wobble,wobble),y1+random(-1*wobble,wobble));
  bezierVertex(x1 + random(-1 * wobble, wobble), y1 + random(-1 * wobble, wobble), x1 + ((x2 - x1) / 2) + random(-1 * wobble, wobble), y1 + ((y2 - y1) / 2) + random(-1 * wobble, wobble), x2 + random(-1 * wobble, wobble), y2 + random(-1 * wobble, wobble));
}

function wobbleArc(x,y,w,h,s,e,wobble){
  arc(x+ random(-1 * wobble, wobble),y+ random(-1 * wobble, wobble),w+ random(-1 * wobble, wobble),h+ random(-1 * wobble, wobble),s+random(-1*wobble/PI,wobble/PI),e+random(-1*wobble/TWO_PI,wobble/TWO_PI));
  
}

function refresh() {
  background(255);
  textFont(font);
  textSize(32);
  strokeWeight(0.75);
  textAlign(CENTER, CENTER);
  //background(255);
  for (i = 0; i < 8; i++) {
    noFill();
    wobbleRect((width / 2) - 120, 140, 240, 120, random(0, 15));
    wobbleEllipse((width / 2) - 200, 200, 70, 70, random(0, 10));
    wobbleEllipse((width / 2) + 200, 200, 70, 70, random(0, 10));
    //wobbleArc(width/2,height/2,100,100,0,PI/2,3);
  }
  for (v = 0; v < 4; v++) {
    wobbleShape([(width / 2) - 220, 215, (width / 2) - 220, 185, (width / 2) - 210, 200, (width / 2) - 200, 185, (width / 2) - 190, 200, (width / 2) - 180, 185, (width / 2) - 180, 215, (width / 2) - 220, 215], 4);
    wobbleShape([(width / 2) + 220, 215, (width / 2) + 220, 185, (width / 2) + 210, 200, (width / 2) + 200, 185, (width / 2) + 190, 200, (width / 2) + 180, 185, (width / 2) + 180, 215, (width / 2) + 220, 215], 4);
    
  }

  fill(0);
  text("zine club", width / 2, 200);
  textSize(24);
  text("tutorial", width / 2, 300);
  text("day 3", width / 2, 330);
  text("room 3", width / 2, 360);
}