class tree {

  constructor(x, height, length, angle, rules) {
    this.length = length;
    this.angle = angle;
    this.axiom = "X";
    this.sentence = this.axiom;
    this.generations = 8;
    this.rules = rules;
    this.x = x;
    this.y = height;
    resetMatrix();
    translate(this.x, this.y);
    for (var i = 0; i < this.generations; i += 1) {
      this.generate();
    }
  }

  update() {
    this.x += 1;
    resetMatrix();
    translate(this.x, this.y);
    stroke(255, 200)
    strokeWeight(2);
    this.turtle();
  }

  generate() {
    this.length *= 0.59;
    var nextSentence = "";
    for (var i = 0; i < this.sentence.length; i += 1) {
      var currentChar = this.sentence.charAt(i);
      var found = false;
      for (var j = 0; j < this.rules.length; j += 1) {
        if (currentChar == this.rules[j].initial) {
          nextSentence += this.rules[j].final;
          found = true;
          break;
        }
      }
      if (!found) {
        nextSentence += currentChar;
      }
    }
    this.sentence = nextSentence;
    this.turtle();
  }

  turtle() {
    resetMatrix();
    translate(this.x, this.y);
    for (var i = 0; i < this.sentence.length; i += 1) {
      var currentChar = this.sentence.charAt(i);
      if (currentChar == 'F') {
        line(0, 0, 0, -this.length);
        translate(0, -this.length);
      } else if (currentChar == "+") {
        rotate(this.angle);
      } else if (currentChar == '-') {
        rotate(-this.angle);
      } else if (currentChar == '[') {
        push();
      } else if (currentChar == ']') {
        pop();
      }
    }
  }
}
