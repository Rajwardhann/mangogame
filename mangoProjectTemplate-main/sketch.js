
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2= new mango(1200,150,30);
	mango3 = new mango(1040,120,30);
	mango4 = new mango(975,150,30)
	mango5 = new mango(1050,175,30)
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone1 = new stone(200,330,50);
	sling1 = new rope(stone1.body,{x : 235, y: 420})
	Engine.run(engine);

}

function draw() {

  background(230);
  fill("black");
  textSize(30)
  text("drag the stone to throw",3,20);
  image(boy ,200,340,200,300);
  text("Press Space to try again",300,100);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  sling1.display();
  groundObject.display();
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);

}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body,{x: mouseX , y: mouseY})
}

function mouseReleased()
{
	sling1.fly();
}

function keyPressed()
{
	if(keyCode === 32)
	{
		sling1.attach(stone1.body);
	}
}

function detectCollision(stone,mango)
{
	mangobodyposition = mango.body.position
	stonebodyposition = stone.body.position

	var distance = dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y);
	if(distance<=mango.r + stone.r)
	{
		Matter.Body.setStatic(mango.body,false);
	}
}