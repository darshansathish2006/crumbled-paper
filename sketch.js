
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var dustbinObj,groundObject;
var Paper;

function setup(){
	var canvas = createCanvas(1600, 700);
    engine = Engine.create();
	  world = engine.world;
	
	groundObject=new ground(800,height,1600,20);
	dustbinObj=new dustbin(1200,650);
	
	Paper=new paper(100,100);

function draw(){
  background("white");

  Engine.update(engine);

  engine.display();
  Paper.display();
  groundObject.display();
  dustbinObj.display();

}