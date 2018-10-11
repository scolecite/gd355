  var position = 300;

  function setup() {
    // put setup code here
    createCanvas(500, 500);
    frameRate(2);

  }

  function draw() {
    // put drawing code here

    background(128);
    //melted-bottom
    noStroke();
    fill(166, 199, 215);
    ellipse(250, 400, position, 50);
    ellipse(200, 350, position, 30);
    ellipse(300, 450, position, 100);
    ellipse(150, 500, position, 50);

    //arms
    stroke(64);
    strokeWeight(4);
    line(50, 400, 250, 250);
    line(450, 400, 250, 250);

    //melted-top
    noStroke();
    fill(166, 199, 215);
    ellipse(250, 220, 200, 50);
    ellipse(200, 200, 100, 30);


    //torso
    noStroke();
    fill(231);
    ellipse(250, 450, 200, 200);
    ellipse(250, 300, 150, 150);

    //buttons
    noStroke();
    fill(64);
    ellipse(250, 250, 10, 10);
    ellipse(250, 300, 10, 10);
    ellipse(250, 350, 10, 10);
    ellipse(250, 400, 10, 10);
    ellipse(250, 450, 10, 10);

    textFont('Synthemesc');
    textSize(72);
    fill(231);
    text('goodnight', 75, 90);
    textSize(60);
    fill(166, 199, 215, );
    text('sweet prince', 70, 145);
  }
