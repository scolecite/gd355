function setup() {
  // put setup code here
  createCanvas(500, 500); // width & height of canvas 
}

function draw() {
  // put drawing code here
  background(255, 177, 133); // set a color to the canvas
  rect(100, 100, 100, 60); // add a rectangle
  rect(60, 60, 40, 40); // add a rectangle
  rect(60, 160, 40, 40); // add a rectangle
  rect(200, 60, 40, 40); // add a rectangle
  rect(200, 160, 40, 40); // add a rectangle
  fill(mouseX, mouseY, 0)
  stroke(mouseY, mouseX, )
  ellipse(mouseX, mouseY, 10, 10) // position of circle follows 
}
