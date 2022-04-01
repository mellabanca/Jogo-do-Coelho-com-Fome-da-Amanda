const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var linguica;
var natura;
let engine;
let world;
var grandechurrasco; 
var ground;
var academia;
var nutricao;
var alfredo;

function preload(){
  academia = loadImage("background.png");
  nutricao = loadImage("melon.png");
  alfredo = loadImage("Rabbit-01.png");

}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(200, 690, 600, 20);
linguica=new Rope(6,{x:245,y:30});

var options={
  density:0.001
}
natura=Bodies.circle(300,300,15,options);
Matter.Composite.add(linguica.body,natura);

grandechurrasco=new Grandechurrasco(linguica,natura)


  rectMode(CENTER);
  imageMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  image(academia, width/2, height/2, 500, 700);

  Engine.update(engine);
  image(nutricao, natura.position.x,natura.position.y,60,60);
  


  ground.show();
  linguica.show();
}




