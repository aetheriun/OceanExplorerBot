//this is the funciton that creates the boat object. this was hand coded by myself

function Ship(scl) {
  this.scl = scl; // sets the size
  this.angle = 0.00; // sets the initial angle for the boat object rotation

  this.display = function(xpos, ypos, rotation) {
    this.rotation = rotation; // inherits the rotation form the boat's position on the sinewave in the main sketch
    this.xpos = xpos; // xposition of the boat object
    this.ypos = ypos; // yposition of the boat object
    
    //rotates the boat object to simulate rocking
    push();
    translate(this.xpos,this.ypos);
    rotate(radians(map(this.rotation,-45,45,-10,10)));

    //the mast/mast supports
    noStroke();
    fill(39, 99, 26);
    rect(0, 0 - (this.scl * 11), (this.scl * 0.5), (this.scl * 17));
    rect(0 + (this.scl * 3), 0- (this.scl * 5), (this.scl * 18), (this.scl * 0.5));

    //the hull
    fill(40, 99, 34);
    beginShape();
    vertex(0-(this.scl*10),0-(this.scl*3));
    vertex(0+(this.scl*14),0-(this.scl*3));
    bezierVertex(0+(this.scl*14),0-(this.scl*3),0+(this.scl*10),0+(this.scl*6),0+(this.scl*6),0+(this.scl*6));
    bezierVertex(0-(this.scl*12),0+(this.scl*6.5),0-(this.scl*10),0+(this.scl*5),0-(this.scl*10),0-(this.scl*3));
    vertex(0-(this.scl*10),0-(this.scl*3));
    endShape();

    //the sails
    fill(0, 0, 210);
    beginShape();
    vertex(0 - (this.scl * 0.5), 0 - (this.scl * 19.5));
    bezierVertex(0 - (this.scl * 0.5), 0 - (this.scl * 19.5), 0 - (this.scl), 0 - (this.scl * 5.5), 0 - (this.scl * 0.5), 0 - (this.scl * 5.5));
    bezierVertex(0 - (this.scl * 0.5), 0 - (this.scl * 5.5), 0- (this.scl * 2.5), 0 - (this.scl * 6.5), 0 - (this.scl * 6), 0 - (this.scl * 5.5));
    bezierVertex(0 - (this.scl * 6), 0 - (this.scl * 5.5), 0 - (this.scl * 5), 0 - (this.scl * 14), 0 - (this.scl * 0.5), 0 - (this.scl * 19.5));
    endShape(CLOSE);

    beginShape();
    vertex(0 + (this.scl * 0.5), 0 - (this.scl * 19.5));
    bezierVertex(0 + (this.scl * 0.5), 0 - (this.scl * 19.5), 0 + (this.scl * 2), 0 - (this.scl * 15.5), 0 + (this.scl * 0.5), 0 - (this.scl * 5.5));
    bezierVertex(0 + (this.scl * 0.5), 0 - (this.scl * 5.5), 0 + (this.scl * 6.5), 0 - (this.scl * 6.5), 0 + (this.scl * 12), 0- (this.scl * 5.5));
    bezierVertex(0 + (this.scl * 12), 0 - (this.scl * 5.5), 0 + (this.scl * 10), 0 - (this.scl * 16), 0 + (this.scl * 0.5), 0 - (this.scl * 19.5));
    endShape(CLOSE);
    
    pop();
  }
}
