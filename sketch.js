const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;

function setup() {
  createCanvas(1600,600);
  engine = Engine.create();
  world = engine.world; 

  box1 = new Box(780, 450, 500, 270, "red");
  box2 = new Box(480, 400, 100, 370, "blue");
  box3 = new Box(1000, 400, 100, 370, "blue");
  box4 = new Box(750, 250, 100, 130, "green");
  box5 = new Box(750, 480, 170, 210, "yellow");
}

function draw() {
  background("yellow");  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill("red");
  strokeWeight(2);
  stroke("black");
  triangle(700, 180, 800, 180, 750, 80);
  triangle(950, 210, 1050, 210, 1000, 100);
  triangle(430, 210, 530, 210, 480, 100);
}