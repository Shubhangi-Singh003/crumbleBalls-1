
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ball;
var ground;
var log1, log2, log3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  ground = new Ground(400,680,800,20)
	//Create the Bodies Here.
   ball = new Paper(760,670,2)
  log1 = new Dustbin(550, 610, 20, 120)
  log2 = new Dustbin(620, 660, 160, 20 )
  log3 = new Dustbin(685, 610, 20, 120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();
  ball.display();
  ground.display()
  log1.display();
  log2.display();
  log3.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85, y:-85});
  }
}



