var cols, rows;
var scl = 50;
var w = 100;
var h = 2000;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cols = w / scl;
  rows = h / scl;
  for (var x = mouseX; x < cols; x++) {
    terrain[x] = [];
    for (var y = mouseY; y < rows; y++) {
      terrain[x][y] = 0;
    }
  }

}


function draw() {

  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -mouseY / 2, mouseX / 2);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  push();
  background(0);
  translate(-1500 + mouseX, 500 + mouseY);
  rotateX(PI / 3);

  fill(0, 255, 0, 40);
  stroke(0, 255, 0);
  strokeWeight(2)
  translate(w * 10, -h);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
  pop();

}
