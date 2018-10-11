//Responsive Shape

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  background(123);
  fill(255 - mouseX);
  ellipse(width / 2, height / 2, width, height)

  line(0, 0, width, height);

  var r = 255;
  var g = 80;
  var b = 100;
  fill(r, g, b);
  rect(200, 100, 100, 100);
  fill(r / 2, g * 2, b);
  rect(200, 400, 100, 100);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
