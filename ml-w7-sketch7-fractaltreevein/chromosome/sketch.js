var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
  angle = mouseX / 100;
}

function mouseReleased() {
  angle = mouseX / 100;
}

function draw() {
  background(229, 93, 135);
  stroke(95, 195, 228);
  translate(width / 2, height);
  branch(10 + mouseX);
}

function branch(len) {
  line(0, 0, 0, -len, 0.7);
  translate(pmouseX, pmouseY);
  // translate(0, -len);
  // rotate(mouseX / 100);
  if (len > 10) {
    push();
    rotate(angle);
    branch(len * 0.7);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.7);
    pop();
  }

}
