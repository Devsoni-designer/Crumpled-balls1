
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1, box2, box3;
var paperBall;
var ground;

function setup() {
	createCanvas(1500, 400);

	engine = Engine.create();

	world = engine.world;

	ground = new Ground(700,370,1500,20);

	box1 = new Dustbin(1170,350,150,20);
	box2 = new Dustbin(1085,300,20,120);
	box3 = new Dustbin(1255,300,20,120);

	paperBall = new Paper(180,100, 20);

	 Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  
  paperBall.display();
  
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:50,y:-60});
	}
}



