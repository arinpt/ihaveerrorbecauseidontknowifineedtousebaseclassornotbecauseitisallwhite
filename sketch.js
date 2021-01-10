const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var slingShot;


function setup(){
    var canvas = createCanvas(1200,400);
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    block8 = new Block(330, 235,30,40);
    block9 = new Block(360,235,30,40);
    block10=new Block(390,235,30,40);
    block11=new Block(420, 235, 30, 40);
    block12=new Block(450, 235, 30, 40);
    block13=new Block(360,195,30,40)
    block14=new Block(390,195,30,40)
    block15=new Block(390,155,30,40)
}

function draw(){
    Engine.update(engine);
    ground.display();
}