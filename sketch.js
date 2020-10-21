const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ball;
var ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var bp = { restitution: 1.0
  } 
  ball = Bodies.circle(400,200,50,bp);
  World.add(world,ball);
  var gp = {
    isStatic:true 
  }
  ground = Bodies.rectangle(400,380,800,25,gp);
  World.add(world,ground);
  console.log(ball);
  console.log(ball.position.y);  
}

function draw() {
  background(0);
  Engine.update(engine); 
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,800,25);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
  
}