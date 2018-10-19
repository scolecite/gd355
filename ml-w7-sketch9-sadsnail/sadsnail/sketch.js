var drawBitch = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
}

function draw() {

  fill(0, 10);
  stroke(0, 160);

  translate(width / 2, height / 2);

  for (var i = 0; i < 30; i++) {
    push();
    rotate(i / 5.0);
    scale(i / 8.0);
    triangle(mouseX, mouseY, pmouseX, pmouseY, mouseX, mouseY);
    pop();
  }
}
