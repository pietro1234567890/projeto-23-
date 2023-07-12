
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var solo, prateleira1, prateleira2;
var helice1, helice2, helice3;
var bolinha1, bolinha2, bolinha3, bolinha4, bolinha5;
var angulo1 = 60;
var angulo2 = 60;
var angulo3 = 60;
function preload()
{
	
}

function setup() {
	createCanvas(560, 600);


	engine = Engine.create();
	world = engine.world;

	prop = {isStatic: true}
	prop2 = {restitution: 0.96}
    solo = Bodies.rectangle(280,600,560,20,prop)
    World.add(world, solo)

prateleira1 = Bodies.rectangle(140,400,150,20,prop)
World.add(world, prateleira1)
prateleira2 = Bodies.rectangle(420,400,150,20,prop)
World.add(world, prateleira2)
helice1 =  Bodies.rectangle(280,200,150,20,prop)
World.add(world, helice1)

helice2 = Bodies.rectangle(280,200,150,20,prop)
World.add(world, helice2)

helice3 = Bodies.rectangle(280,200,150,20,prop)
World.add(world, helice3)

bolinha1 = Bodies.circle(280,0,10,prop2)
World.add(world, bolinha1)

bolinha2 = Bodies.circle(280,0,10,prop2)
World.add(world, bolinha2)

bolinha3 = Bodies.circle(280,0,10,prop2)
World.add(world, bolinha3)

bolinha4 = Bodies.circle(280,0,10,prop2)
World.add(world, bolinha4)

bolinha5 = Bodies.circle(280,0,10,prop2)
World.add(world, bolinha5)

	Engine.run(engine);
    rectMode(CENTER);
   ellipseMode(RADIUS)

}


function draw() {
  background(0);
  fill("brown")
  Engine.update(engine);
  rect(solo.position.x, solo.position.y, 560, 20)
  rect(prateleira1.position.x, prateleira1.position.y, 150, 20)
  rect(prateleira2.position.x, prateleira2.position.y, 150, 20)
  push()
  Body.rotate(helice1, angulo1)
  translate(helice1.position.x, helice1.position.y, 150, 20)
  rotate(angulo1)
  rect(0,0,150, 20)
  angulo1 += 4
 pop()

 push()
  Body.rotate(helice2, angulo2)
  translate(helice2.position.x, helice2.position.y, 150, 20)
  rotate(angulo2)
  rect(0,0,150, 20)
  angulo2 += 6
 pop()

 push()
  Body.rotate(helice3, angulo3)
  translate(helice3.position.x, helice3.position.y, 150, 20)
  rotate(angulo3)
  rect(0,0,150, 20)
  angulo3 += 8
 pop()

ellipse(bolinha1.position.x, bolinha1.position.y,10,10)
ellipse(bolinha2.position.x, bolinha2.position.y,10,10)
ellipse(bolinha3.position.x, bolinha3.position.y,10,10)
ellipse(bolinha4.position.x, bolinha4.position.y,10,10)
ellipse(bolinha5.position.x, bolinha5.position.y,10,10)
 drawSprites();
}



