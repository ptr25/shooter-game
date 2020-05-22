
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
 var boxes=[]
var tank;


function setup() {
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
   tank = loadImage("shooter.png");
    
}
 
function mousePressed() {
    if (mouseY < 350) {
        boxes.push(new Particle(mouseX, mouseY, random(20, 40),random(20,40)));
    }
    }

 
function draw() {
background("green");
 
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].display();
    }
  image(tank,50,200,150,150);
}
 
