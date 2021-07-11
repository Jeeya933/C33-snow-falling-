const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bgImg; 
var girl; 
var snow;

function preload(){
  bgImg = loadImage("snow2.jpg");
  girlImg = loadImage("Girll.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  girl = createSprite(100, 350, 50, 50);

girl.addImage("cold", girlImg);
girl.scale = 0.2;
}

function draw() {
  background(bgImg);  

  snow1 = new Snow(400,500,10,10)
  keyPressed();
  drawSprites();
  }
  
function keyPressed(){
  if(keyCode === 77){
    girl.x = girl.x + 20;
}
  if(keyCode === 75){
  girl.x = girl.x - 20;

  snow1.display();
}
}


