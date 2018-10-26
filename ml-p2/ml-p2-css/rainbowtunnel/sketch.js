var hue;
var rainbow = true;
var rate = 5;
var radius;

function setup() {
  createCanvas(windowWidth - 300, windowHeight);
  background(220);
  smooth();
  hue = 0;

  radius = createSlider(2, 10, 8);
  radius.position(windowWidth - 250, 100);

}

function draw() {

  if (mouseIsPressed == true) {
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
    for (var i = 0; i < radius.value(); i++) {
      push();
      translate(0, 0);
      rotate(TWO_PI * i / radius.value());
      ellipse(mouseX, mouseY, mouseX / 2, mouseX / 2);
      ellipse(pmouseX, pmouseY, pmouseX / 2, pmouseX / 2);
      pop();
    }
  }

}
