const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var angle
var engine
var bobObject1, roofObject, floorObject;
var rope1;
var caja1, caja2, caja3, caja4, caja5, caja6
var world;


function setup() {
  createCanvas(800,400);
  rectMode(CENTER);

  angle = PI

  engine = Engine.create();
  world = engine.world;

  floorObject=new floor(525,310,125,10);
  roofObject=new roof(400,125,20,20);
  bobObject=new bob(400,260,40)
  caja1=new tower(500,200,50,50)
  caja2=new tower(550,200,50,50)
  caja3=new tower(500,250,50,50)
  caja4=new tower(550,250,50,50)
  caja5=new tower(500,300,50,50)
  caja6=new tower(550,300,50,50)

  rope1=new rope(bobObject.body,roofObject.body, 0, 0)
  console.log(floorObject.body)


  Engine.run(engine);


}

function draw() {
  background(230);
  Engine.update(engine);  

  floorObject.display()
  roofObject.display()
  
  rope1.display()

  console.log(mouseX);
  console.log(mouseY);  

  bobObject.display()
  
  caja1.display()
  caja2.display()
  caja3.display()
  caja4.display()
  caja5.display()
  caja6.display()





}

function mouseDragged(){
  Matter.Body.setPosition(bobObject.body,{x:mouseX, y:mouseY})
}

