function setup() {
  createCanvas(600, 600);
  background(225, 210, 0);
}

function draw() {

  noStroke();
  // Back Bang & braid
  noStroke()
  fill(122, 64, 33);
  arc(500, 250, 200, 380, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
  arc(150, 200, 240, 400, 0.75 * Math.PI, 0);
  ellipse(550, 350, 100, 100);
  ellipse(550, 400, 100, 100);
  ellipse(550, 450, 100, 100);
  ellipse(550, 500, 100, 100);
  ellipse(550, 550, 100, 100);

  // Clothes
  fill(255, 0, 54);
  ellipse(300, 700, 700, 400);

  // Clothes Shadow
  fill(200, 0, 40);
  arc(205, 530, 100, 150, PI / 2, 3 * PI / 2, CHORD);
  arc(390, 530, 100, 150, 3 * PI / 2, PI / 2, CHORD);

  // Undershirt
  fill(52, 52, 52);
  ellipse(300, 600, 200, 400);


  // right ear
  fill(240, 145, 119);
  ellipse(75, 300, 100, 150);

  // left ear
  fill(240, 145, 119);
  ellipse(525, 300, 100, 150);

  // face
  fill(249, 213, 181);
  ellipse(width / 2, height / 2, 450, 550);

  //Bang
  noStroke()
  fill(122, 64, 33);
  arc(370, 25, 400, 200, 0, PI + QUARTER_PI, CHORD);

  // eye whites
  // Left
  fill(255)
  rect(105, 200, 100, 150, 5, );

  // Right
  fill(255)
  rect(355, 200, 100, 150, 5, );

  // pupils
  // Left
  fill(83, 14, 1)
  var leftpupil = map(mouseX, 50, 200, 150, 155);
  rect(leftpupil - 30, 250, 50, 50, 5, );

  // Right
  fill(83, 14, 1)
  var rightpupil = map(mouseX, 50, 200, 400, 405);
  rect(rightpupil - 30, 250, 50, 50, 5, );

  // Masking Rings
  noFill();
  stroke(248, 228, 213)
  strokeWeight(50);
  rect(100, 200, 130, 150, 5);
  rect(350, 200, 130, 150, 5);

  // tired lids
  // Left
  noStroke();
  fill(240, 145, 119)
  rect(125, 240, 80, 20, 5, );

  // Right
  fill(240, 145, 119)
  rect(375, 240, 80, 20, 5, );


  // tired brows
  // Left
  noStroke();
  fill(122, 64, 33)
  rect(105, 220, 150, 20, 5, );

  // Right
  fill(122, 64, 33)
  rect(355, 220, 150, 20, 5, );

  // Glasses
  noFill();
  stroke(52)
  strokeWeight(10);
  rect(75, 175, 175, 200, 5);
  rect(325, 175, 175, 200, 5);
  line(250, 250, 325, 250)
  line(50, 250, 75, 250)
  line(500, 250, 550, 250)


  //Mouth
  strokeWeight(15);
  stroke(242, 114, 69);
  arc(290, 460, 100, 100, -PI, 0, );

  //Nose
  fill(240, 145, 119);
  stroke(240, 145, 119);
  strokeWeight(20);
  strokeJoin(ROUND);
  triangle(285, 270, 270, 350, 305, 350);



}
