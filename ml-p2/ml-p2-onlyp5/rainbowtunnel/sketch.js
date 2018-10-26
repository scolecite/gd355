var hue;
var rainbow = true;
var rate;
var radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  smooth();
  hue = 0;

  radius = createSlider(3, 20, 8);
  radius.position(windowWidth - 250, 100);

  rate = createSlider(1, 10, 5);
  rate.position(windowWidth - 250, 200);

  button = createButton('Clear');
  button.position(windowWidth - 250, 500);

  button = createButton('Save');
  button.position(windowWidth - 150, 500);

}


function draw() {

  //rainbow brush
  if (mouseIsPressed == true) {
    if (rainbow) {
      if (hue > 360) {
        hue = 0;
      } else {
        hue += rate.value();
      }
    }
    colorMode(HSL, 360);
    noStroke();
    fill(hue, 200, 200);

    // reflector
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

  noStroke();
  fill(47, 47, 47, 20)
  rect(windowWidth - 300, 0, 300, windowHeight)
  fill(220);
  textSize(16);
  textFont('Azo Sans Regular');
  text('Number of reflections: ' + radius.value(), windowWidth - 250, 80);
  text('Rate of Rainbow ' + rate.value(), windowWidth - 250, 180);


}
