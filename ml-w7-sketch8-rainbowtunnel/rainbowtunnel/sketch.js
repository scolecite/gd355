var hue;
var rainbow = true;
var rate = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  smooth();
  hue = 0;
}

function draw() {


}

function mouseDragged() {
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

  translate(width / 2, height / 2);
  for (var i = 0; i < 8; i++) {
    push();
    translate(0, 0);
    rotate(TWO_PI * i / 8);
    ellipse(mouseX, mouseY, mouseX / 2, mouseX / 2);
    ellipse(pmouseX, pmouseY, pmouseX / 2, pmouseX / 2);
    pop();
  }
}
