var hue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(56, 56, 56);
  hue = 0;
}

function draw() {

  if (hue > 360) {
    hue = 0;
  } else {
    hue++;
  }

  colorMode(HSL, 360);
  noStroke();
  fill(hue, 255, 255);
  ellipse(mouseX, mouseY, 50, 50);
}
