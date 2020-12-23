
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	person = loadImage("images/boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(600, 600, 10, 10)
	
	mango1 = new Mangoo(500, 650, 10, 10)
	mango2 = new Mangoo(550, 450, 10, 10)
	mango3 = new Mangoo(590, 540, 10, 10)
	mango4 = new Mangoo(390, 300, 10, 10)
	mango5 = new Mangoo(100, 100, 10, 10)
	mango6 = new Mangoo(200, 350, 10, 10)
	mango7 = new Mangoo(200, 340, 10, 10)
	mango8 = new Mangoo(270, 150, 10, 10)
	mango9 = new Mangoo(290, 90, 10, 10)
	mango10 = new Mangoo(450, 190, 10, 10)
	mango11 = new Mangoo(500, 120, 10, 10)

	stone = new stone(200, 200, 10, 10)
	person = createSprite(150, 200, 10, 10)

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  stone.display()
  person.display()
  drawSprites();
 
}



