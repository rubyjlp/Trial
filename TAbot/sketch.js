//rubyjlp.github.io/Trial/TAbot

var help = new Array("You're missing a semicolon!", "Did you close your parentheses?", "Remember to declare a variable before you use it!", "Try working out what you want to do on paper.", "Talk through your problem with someone.", "A variable is like a container for numbers or words.", "When declaring a function, inputs are placeholders for values that you can pass in later, when you invoke the function.", "Take a walk.","Is the function in the right loop?", "Try working on the part of your code that isn't working in a separate sketch.","Label the different parts of your code so it can be read easily!","Comment out lines of code to isolate a problem.", "Check the console!","Make sure all your brackets are in pairs!", "Make sure the file you're displaying is the one you're working on!", "Save different versions of your code!", "Look back at previous versions of your code to find out what went wrong!");//array of pieces of advice
var advice = "Click my antenna or shake your phone for advice.";//current piece of advice displayed
var glow = true;//whether or not antenna is glowing and advice is displayed
var counter = 0;//counts up to a certain number of iterations of the draw loop, acts as a timer, circumventing p5's lack of a timer function
var beep;//the beep sound

function setup() {
  beep = new p5.Oscillator();//creates beeping sound as an object
  beep.setType('sine');//sets beep to a sine tone
  beep.amp(0);//makes beep silent (the beep is actually constantly running, but is only audible when the antenna is pressed or the phone is shaken)
  beep.freq(600);//sets the frequency of the beep to 600 hz
  beep.start();//begins the beep
  createCanvas(windowWidth, windowHeight);//creates a window the height and width of the device's window
}

function draw() {
  background(255);
  textAlign(CENTER);//draws text from the middle outwards
  counter++;//iterates counter/timer
  
  //text
  fill(0);
  noStroke();
  textSize((18/700)*height);//text size is relative to device size
  if (glow === true) {//checks if antenna bulb is glowing
    text(advice, 0, (20/700)*height, width);//displays advice at height relative to window size. The text wraps when it is larger than the width of the screen.
  }
  
  //antenna and neck stem
  strokeWeight((5/700)*height);//stroke weight is relative to height of window
  stroke(0);
  line(width/2, (1/7)*height, width/2, (3/7)*height);//x position is on center of x axis, length is relative to height of window
  
  //head
  noStroke();
  fill(150);
  arc(width/2, (225/700)*height, (80/700)*height, (80/700)*height, PI, 0, CHORD); //head = half circle + rectangle centered along x axis and scaled based on window height
  rect((width/2)+((-40/700)*height), (225/700)*height, (80/700)*height, (30/700)*height);//first parameter sets upper corner of rectangle as a height-based distance away from the horizontal center
  
  //arms
  stroke(0);
  strokeWeight((5/700)*height);
  noFill();
  arc(width/2, (215/700)*height, (250/700)*height, (200/700)*height, 0, PI, OPEN);//both arms come from one half ellipse behind the body, centered along x axis and scaled based on window height
  
  //legs
  stroke(0);
  strokeWeight((5/700)*height);
  line((width/2)+((-50/700)*height), (450/700)*height, (width/2)+((-50/700)*height), (600/700)*height);//legs are two lines centered along x axis and etc.
  line((width/2)+((50/700)*height), (450/700)*height, (width/2)+((50/700)*height), (600/700)*height);
  
  //body
  noStroke();
  fill(150);
  rect((width/2)+((-60/700)*height), (275/700)*height, (120/700)*height, (175/700)*height);//you probably get it at this point
  
  //antenna bulb
  noStroke();
  fill(255, 0, 0);
  ellipse(width/2, (100/700)*height, (30/700)*height, (30/700)*height);//draws a bulb at the top of the antenna
  if (glow === true) {//checks if the bulb is supposed to glow
    fill(255, 0, 0, 50);//semi-transparent "glowy" fill
    ellipse(width/2, (100/700)*height, (45/700)*height, (45/700)*height);//draws a "glowy" circle somewhat larger than the antenna
  }
  
  //glasses
  stroke(0);
  strokeWeight((5/700)*height);
  fill(255);
  line((width/2)+((-25/700)*height), (225/700)*height, (width/2)+((25/700)*height), (225/700)*height);//bridge of glasses
  ellipse((width/2)+((-25/700)*height), (225/700)*height, (35/700)*height, (35/700)*height);//left frame
  ellipse((width/2)+((25/700)*height), (225/700)*height, (35/700)*height, (35/700)*height);//right frame
  point((width/2)+((30/700)*height), (220/700)*height);//left eye
  point((width/2)+((-20/700)*height), (220/700)*height);//right eye
  
  //counter
  if (counter > 10) {
    beep.amp(0,0.1);//fades out beep after ten frames if the beep is audible
  }
  if (counter > 150) {
    glow = false;//maintains/reverts glow to off state after 150 frmaes
    counter = 0;//resets timer
  }
}

function mouseClicked() {
  if (dist(mouseX, mouseY, width/2, (100/700)*height) < (15/700*height)) {//checks if mouse is over the antenna bulb
    counter=0;//resets counter / starts new timer
    advice = help[round(random(0, (help.length - 1)))];//picks random piece of advice from array
    glow = true;//allows the bulb to glow and advice to be displayed
    beep.amp(1,0.05);//begins beep
  }
}

function deviceShaken() {//same as previous function, but as response to the device being shaken
    counter=0;
    advice = help[round(random(0, (help.length - 1)))];
    glow = true;
    beep.amp(1,0.05);
}

function windowResized() {//if the window is resized, it sizes the canvas to the new window height
  resizeCanvas(windowWidth, windowHeight);
}