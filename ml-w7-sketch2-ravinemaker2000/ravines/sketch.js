//mic capture
var mic;
var amp;
var volhistory = [];

//rain
var acceleration = 0.0098;
var nDrops = 1000;
var drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn()
  mic.start()
  amp = new p5.Amplitude();

  for (i = 0; i < nDrops; i++) {
    drops.push(new Drop());
  }
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
  stroke(75, 75, 140);
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
  vertex(volhistory.length + 1, map(volhistory.length + 1, 0, 1, height, 0));
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


  vertex(volhistory.length + 1, map(volhistory.length + 1, 0, 1, height, 0));
  endShape();
  pop();


  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }

  stroke(54, 53, 110);
  drops.forEach(function (d) {
    d.drawAndDrop();
  });

  // fill(234, 231, 28)
  // noStroke()
  // ellipse(200, 200, 50, 50)
  fill(54, 53, 110);
  noStroke();
  textSize(72);
  text('RAVINE MAKER 2000', width / 4, height / 4);
  textFont("Studly Outline");

  fill(88, 201, 233);
  noStroke();
  textSize(72);
  text('RAVINE MAKER 2000', width / 4, height / 4);
  textFont("Studly Regular");

  fill(54, 53, 110);
  noStroke();
  textSize(72);
  text('RAVINE MAKER 2000', width / 4, height / 4);
  textFont("Studly Extrude Left");

  noFill();
  stroke(88, 201, 233);
  strokeWeight(5);
  line(volhistory.length, 0, volhistory.length, height);

}

function Drop() {
  this.initX = function () {
    this.x = random() * width;
  };
  this.initY = function () {
    this.y = -random() * height / 3; // Initialise rain somewhat off the screen
  };

  this.initX();
  this.y = random() * height;

  this.length = random() * 10;
  this.speed = random();

  this.drawAndDrop = function () {
    this.draw();
    this.drop();
  };

  this.draw = function () {
    line(this.x, this.y, this.x, this.y + this.length);
  };

  this.drop = function () {
    if (this.y < height) {
      this.y += this.speed;
      this.speed += acceleration;
    } else {
      this.speed = random();
      this.initY();
      this.initX();
    }
  };
}
