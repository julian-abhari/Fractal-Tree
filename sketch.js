// Variables: A, B
// Axiom: A
// Rules: (A –> AB), (B -> A)

var angle;
var length = 100;
var rules = [];
var trees = [];
var numberOfTrees = 1;

rules[0] = {
  initial: "F",
  final: "FF"
}
rules[1] = {
  initial: "X",
  final: "F[+X][-X]FX"
}

function setup() {
  angle = radians(25);
  createCanvas(1260, 800);
  background(0);
  for (var i = 0; i < numberOfTrees; i += 1) {
    // For more than one tree use (width / numberOfTrees)
    trees[i] = new tree((width / 2), height, length, angle, rules);
  }
  noLoop();
}

function draw() {
  background(0);
  //Loop through the trees and update their position
  for (var i = 0; i < numberOfTrees; i += 1) {
    trees[i].update();
    if (trees[i].x > width + (width/numberOfTrees)) {
      trees[i] = new tree(-(width / numberOfTrees), height, length, angle, rules);
    }
  }
}
