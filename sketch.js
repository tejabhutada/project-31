const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divisions=[],plinkos=[] ,division2,division3,division4,division5,division6
var divisionHeight = 300
function setup() {
 createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,788,1200,16);
 /* divisions = new Division(350,630,15,300)
  division2 = new Division(400,630,15,300)
  division3 = new Division(450,630,15,300)
  division4 = new Division(300,630,15,300)
  division5 = new Division(250,630,15,300)
  division6 = new Division(200,630,15,300)
  division7 = new Division(150,630,15,300)
  division8 = new Division(100,630,15,300)
  division9 = new Division(50,630,15,300)*/
  
  for(var k = 0; k<=width; k=k+80){
    divisions.push(new Division(k ,height-divisionHeight/2 ,10, divisionHeight  ))
    }
    for(var j = 40; j<=width; j=j+50){
      plinkos.push(new Plinko(j,75))
      }
  }
  

function draw() {
  stroke("red");
  strokeWeight(4);
  background(0);  
  Engine.update(engine);
  ground.display();
  for(var k = 0;k<divisions.length;k++){
    divisions[k].display();
  }
 for(var j = 40;j<plinkos.length;j++){
    plinkos[j].display();
  }

 /* divisions.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();*/
}