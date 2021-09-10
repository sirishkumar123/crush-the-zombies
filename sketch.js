const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground
var bridge;
var leftWall, rightWall;
var jointPoint,joint;
var jointLink,jl;


var stones = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0, height - 10, width * 2, 20);
  leftWall = new Base(100, height/2-100, 200, 200);
  rightWall = new Base(width - 100, height/2-100, 200, 200);

  bridge = new Bridge(25, { x: leftWall.body.position.x - 20, y: height- 500 });
  jointPoint = new Base(width - 200, height / 2 - 100, 40, 20);
  joint = new Base(width - 1300, height / 2 - 100, 40, 20);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);
  

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-100, 100);
    var stone = new Stone(x, y, 40);
    stones.push(stone);
  }
  

  
}

function draw() {
  background(0);
  Engine.update(engine);
  for (var stone of stones) {
    stone.show();
  }

 
  leftWall.show();
  rightWall.show();
  ground.show();

  bridge.show();
  

  
  
  
 
  

 
}


