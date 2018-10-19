var hue;
var rainbow = true;
var rate = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(58, 58, 58);
  hue = 0;
}

function draw() {
  if (rainbow) {
    if (hue > 360) {
      hue = 0;
    } else {
      hue += rate;
    }
  }
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 200, 200);
  ellipse(mouseX, mouseY, 100, 100);
}
