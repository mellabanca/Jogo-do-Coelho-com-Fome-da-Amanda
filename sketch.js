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
var alfredofitness;
var tentacao;
var piscadinha;
var seAlimentando;

function preload(){
  academia = loadImage("background.png");
  nutricao = loadImage("melon.png");
  alfredo = loadImage("Rabbit-01.png");

  piscadinha = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  seAlimentando = loadAnimation("eat_0.png","eat_1.png","eat_2.png","eat_3.png","eat_4.png");

  piscadinha.playing = true;
  seAlimentando.playing = true;

  seAlimentando.looping = false;

}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  piscadinha.frameDelay = 20;
  seAlimentando.frameDelay = 20;
 
  ground = new Ground(200, 690, 600, 20);
  linguica=new Rope(6,{x:245,y:30});

var options={
  density:0.001
}
natura=Bodies.circle(300,300,15,options);
Matter.Composite.add(linguica.body,natura);

grandechurrasco=new Grandechurrasco(linguica,natura)

alfredofitness=createSprite(250,630,100,100);
alfredofitness.addImage(alfredo);
alfredofitness.scale=0.2;
alfredofitness.addAnimation("piscadinha", piscadinha);
alfredofitness.addAnimation("seAlimentando", seAlimentando);
alfredofitness.changeAnimation("piscadinha");

tentacao=createImg("cut_button.png");
tentacao.position(220,30);
tentacao.size(50,50);
tentacao.mouseClicked(churrascovegano);


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
  
  drawSprites();

}
function churrascovegano(){
  linguica.break();
grandechurrasco.cabou();
grandechurrasco=null;

}



