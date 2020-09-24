/*  This funciton creates the wave objects for the animated ocean
    It is adapted from the P5JS.org Sine Wave and Noise Wave examples, with additional edits done to suit my needs
*/

function Wave(lvl, period, hue, velocity) {
  var noiseVal = 0;
  var sinVal;
  this.yoff = random(1, 1000);
  this.xoff = 0.0
  this.level = lvl // level of the wave in the sketch
  this.hue = hue;
  this.colour = ColArray[this.hue];
  this.xspacing = 2; // Distance between each horizontal location
  this.w = width + 128; // Width of entire wave
  this.theta = 0.0; // Start angle at 0
  this.velocity = velocity;
  this.amplitude = 30; // Height of wave
  this.period = period; // How many pixels before the wave repeats
  this.dx = (TWO_PI / this.period) * this.xspacing; // Value for incrementing x
  this.yvalues = new Array(floor(this.w / this.xspacing)); // Using an array to store height values for the wave
  this.sine = 0;
  
  this.calcWave = function() {
    this.xoff = 0.0;
    
    this.theta += this.velocity;

    let x = this.theta;
    for (let i = 0; i < this.yvalues.length; i++) {
      noiseVal = map(noise(this.xoff, this.yoff), 0, 1, -25, 25);
      sinVal = sin(x) * this.amplitude;
      this.sine = sinVal;
      this.yvalues[i] = noiseVal + sinVal;
      x += this.dx;
      this.xoff += 0.015;
    }
    this.yoff += 0.01;
    
  }

  this.renderWave = function() {
    //this.xoff = 0.0
    noStroke();
    fill(this.colour);
    beginShape();
    for (let x = 0; x < this.yvalues.length; x++) {
    //noiseVal = map(noise(this.xoff, this.yoff), 0, 1, -25, 25);

      vertex(x * this.xspacing, this.level + (this.yvalues[x]));

      //this.xoff += 0.02;
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    //this.yoff += 0.01;
  }

}
