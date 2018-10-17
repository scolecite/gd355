var mic;
var amp;
var volhistory = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn()
  mic.start()
  amp = new p5.Amplitude();
}

function draw() {

  background(54, 53, 110);
  var micLevel = mic.getLevel() * 10;
  console.log(micLevel);
  volhistory.push(micLevel);
  colorMode(HSL, 360);
  fill(micLevel * 200, 200, 200);



  colorMode(RGB, 255);
  strokeJoin(ROUND);
  strokeCap(ROUND);
  stroke(248, 240, 240);
  strokeWeight(5);
  strokeCap(round);

  push();
  var currentY = map(micLevel, 0, 1, height, 0);
  translate(0, -1 * height / 2);
  beginShape();
  vertex(0, map(0, 0, 1, height, 0));
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height, 0);
    vertex(i, y);
  }
  vertex(volhistory.length, height);
  endShape();
  pop();

  push();
  var currentY = map(micLevel, 0, -1, height, 0);
  translate(0, -1 * height / 2);
  beginShape();
  vertex(0, map(0, 0, 1, height, 0));
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, -1, height, 0);
    vertex(i, y);
  }
  vertex(volhistory.length, height);
  endShape();
  pop();
  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }

  stroke(234, 231, 28);
  strokeWeight(5);
  line(volhistory.length, 0, volhistory.length, height);
}
