var timing;
var redTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(236, 233, 225);
  stroke(0, 50);
  strokeWeight(1);
  noFill();
  timing = 0;
  redTime = 0;
}

function draw() {
  if (redTime % 180 < 20) {
    stroke(255, 107, 86, 20);
  } else {
    stroke(58, 27, 33, 50);
  }
  var x1 = width * noise(timing + 10);
  var x2 = width * noise(timing + 20);
  var x3 = width * noise(timing + 30);
  var x4 = width * noise(timing + 40);
  var y1 = height * noise(timing + 50);
  var y2 = height * noise(timing + 60);
  var y3 = height * noise(timing + 70);
  var y4 = height * noise(timing + 80);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  bezier(width - x1, y1, width - x2, y2, width - x3, y3, width - x4, y4);

  timing += 0.005;
  redTime++;
}
