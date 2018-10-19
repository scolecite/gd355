var hue;
var rainbow = true;
var rate = 5;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  smooth();
  hue = 0;
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
  stroke(hue, 200, 200, 90);
  fill(hue, 300, 300, 30);
  bezier(width / 2, height / 2, mouseX + 100, mouseY + 100, mouseX + 20, mouseY + 20, mouseX, mouseY);

}
