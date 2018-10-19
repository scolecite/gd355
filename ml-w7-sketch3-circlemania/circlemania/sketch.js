var mic;
var x;
var y;

function setup() {
  createCanvas(windowWidth, windowHeight);


  mic = new p5.AudioIn()
  mic.start()
  background(0);
  x = 0;
  y = height / 2

}

function draw() {
  var micLevel = mic.getLevel() * 10000
  console.log(micLevel);

  noFill();
  stroke(255, 255, 255, 50);
  strokeWeight(1);
  x++;
  ellipse(x, y, micLevel, micLevel);

  noStroke();
  fill(255)
  textSize(32);
  text('Blow at Me', 10, 30);
  fill(255, 255, 255, 20);
  textSize(24);
  text('Gently', 10, 60);

}
