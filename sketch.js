const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(500,100,400,10)
	bobObject1 = new Bob(400,450,15)
	bobObject2 = new Bob(460,450,15)
	bobObject3 = new Bob(520,450,15)
	bobObject4 = new Bob(580,450,15)
	bobObject5 = new Bob(640,450,15)

	rope1 = new Rope(bobObject1.body,roof.body,-60*2,0)
	rope2 = new Rope(bobObject2.body,roof.body,-60*1,0)
	rope3 = new Rope(bobObject3.body,roof.body,-60*0,0)
	rope4 = new Rope(bobObject4.body,roof.body,-60*-1,0)
	rope5 = new Rope(bobObject5.body,roof.body,-60*-2,0)

	Engine.run(engine);
  
}


function draw() {
  
  background("white");

	roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  rectMode(CENTER);
  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW)	{

	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-25,y:25});
}
}

	
