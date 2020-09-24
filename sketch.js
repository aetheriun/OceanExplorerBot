/* This sketch combines a lot of code from the p5.JS reference and example sections, 
inlcluding but not limited to the Sine, Sine Wave, Noise and Noise Wave pages, as well as
code from The Coding Train / Daniel Shiffmans perlin noise explainer web series

the Tracery component was adapted from Alison Parish's Tracery / P5JS example sketch */

var skyHue; // colour of the sky
var output; // the tracery grammar output variable//
var boatPOS; // the x position of the boat
var inc; // the incriment value for the boat's positiong
var ColArray = []; // the array to hold the wave colours
var boat; // the boat object variable
var alphaAmount; // the alpha amount for the fading rect
var IsFading; // bool to fade the sketch in and out
var fontSize // the size of the font for the tracery text
var fontType // variable for the font to be loaded in

//function preload(){}

function setup() {
  colorMode(HSB, 360, 100, 100, 100);
  textAlign(RIGHT, TOP);
  
  alphaAmount = 0.0;
  IsFading = false;

  createCanvas(windowWidth, windowHeight);
  //createCanvas(1000, 1000);
  
  var waveHue = random(150, 250); // sets the primary hue of the ocean
  skyHue = color(random(0, 100), 20, 95);
  //populates the array of colours for the waves, using shades and tones of the hue
  ColArray = [
    color(waveHue, 33, 100),
    color(waveHue, 66, 100),
    color(waveHue, 100, 100),
    color(waveHue, 100, 66),
    color(waveHue, 100, 33)
  ];

  //creates the tracery output
  var grammar = tracery.createGrammar(grammarSource);
  grammar.addModifiers(tracery.baseEngModifiers);
  output = grammar.flatten("#origin#");

  //creates the wave objects
  waveA = new Wave(height / 3, 200, 0, 0.02);
  waveB = new Wave((height / 3) * 1.3, 230, 1, 0.04);
  waveC = new Wave((height / 3) * 1.6, 260, 2, 0.06);
  waveD = new Wave((height / 3) * 2, 290, 3, 0.08);
  waveE = new Wave((height / 3) * 2.5, 320, 4, 0.1);

  //creates the boat object
  boat = new Ship(width / 180);

  //sets the boat objects initial xposition and the incriment value
  boatPOS = 0.0;
  inc = 0.5;
}

function draw() {
  //draws the backgorund the 'sky' colour
  background(color(skyHue));

  //sets the colour for the tracery generated text and draws it to the screen
  fill(ColArray[3]);
  fontSize = width/25;
  fontSize = constrain(fontSize,20,30);
  textFont('Playfair Display');
  textSize(fontSize);
  text(output, 20, 20, width - 40, height - 40);

  //calculates and draws to the screen each ocean wave, one by one.
  waveA.calcWave();
  waveA.renderWave();

  waveB.calcWave();
  waveB.renderWave();
  
  waveC.calcWave();
  
  //draws the ship at its current position on the 3rd wave path
  rectMode(CENTER);
  fill(0, 100, 100);
  boat.display(boatPOS * waveC.xspacing, waveC.yvalues[floor(boatPOS)] + waveC.level,waveC.yvalues[floor(boatPOS)]);
  rectMode(CORNER);
  
  waveC.renderWave();

  waveD.calcWave();
  waveD.renderWave();

  waveE.calcWave();
  waveE.renderWave();
  
  //draws a rectangle that is either transparent or opaque dependsing on the alpha ampunt
  fill(0,0,255,alphaAmount);
  rect(0,0,width,height);
  
  
  //if the alpha is fully opaque, turn IsFading to false and runs the refresh page function
  if(alphaAmount>=100){
    IsFading = false;
    RefreshPage();
  }
  
  // if IsFading is true + the alpha amount is lower than 100, incriment the alpha amount by one.
  // if it false, and the alhpa amount is higher than 0, decriment the alpha amount by onw\e.
  if(IsFading == true){
    if(alphaAmount<100){
      alphaAmount += 1;
  }
 } else if(IsFading == false){
   if (alphaAmount>0){
     alphaAmount -= 1;
   }
 }

  //if the boat positiong leaves the screen, set the IsFading variable to true
if (boat.xpos >= width) {
  IsFading = true;
  }
  
  //moves the boat forward by incriment
  boatPOS += inc;
}

// function is a copy of part of Setup, creates a new passage using the tracery grammar, choses an new sky/wave colour, and creates the ocean

function RefreshPage() {
  var waveHue = random(150, 250);
  skyHue = color(random(0, 100), 20, 95);
  ColArray = [
    color(waveHue, 33, 100),
    color(waveHue, 66, 100),
    color(waveHue, 100, 100),
    color(waveHue, 100, 66),
    color(waveHue, 100, 33)
  ];

  var grammar = tracery.createGrammar(grammarSource);
  grammar.addModifiers(tracery.baseEngModifiers);
  output = grammar.flatten("#origin#");

  waveA = new Wave(height / 3, 200, 0, 0.02);
  waveB = new Wave((height / 3) * 1.3, 230, 1, 0.04);
  waveC = new Wave((height / 3) * 1.6, 260, 2, 0.06);
  waveD = new Wave((height / 3) * 2, 290, 3, 0.08);
  waveE = new Wave((height / 3) * 2.5, 320, 4, 0.1);
  
  boat.angle = 0.0;
  boatPOS = 0.0;
}
