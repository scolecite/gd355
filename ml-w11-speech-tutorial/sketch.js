var myVoice = new p5.Speech(); // Instantiate p5.Speech
var words = ["p", "five", "is", "awesome"]; // A list of words
var counter = 0; // A counter for the words
var myRec = new p5.SpeechRec();

function setup() {
  // The Basics
  createCanvas(500, 500);
  background('#171C20');
  colorMode(HSB);
  myVoice.listVoices();
  // myVoice.setVoice('Google français');
  counter = (counter + 1) % words.length;

  // myVoice.interimResults = true;

  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("say something", width / 2, height / 2);
  myRec.onResult = showResult;
  myRec.start();
  // setVoice(default_voice)
}

function draw() {
  // Nothing here yet
}

function mousePressed() {
  fill(random(360), 255, 255); // Generate a random HSB hue;
  ellipse(mouseX, mouseY, 40); // Place an ellipse at (mouseX, mouseY).
  myVoice.speak(myRec.resultString); // Speak "Test!"
}

function showResult() {
  if (myRec.resultValue == true) {
    background(random(360), 255, 255);
    text(myRec.resultString, width / 2, height / 2);
    console.log(myRec.resultString);
  }
}
