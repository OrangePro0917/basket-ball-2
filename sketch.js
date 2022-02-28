const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var court


let engine;
let world;

var basketballImg
var playerImg
var courtImg
var hoopImg
var leftPlayerImg
var idlePlayerImg
var shootingImg


function preload()
{
   basketballImg = loadImage("basket ball.png")
   playerImg = loadAnimation(
     "sprite_0.png",
     "sprite_1.png",
     "sprite_2.png",
     "sprite_3.png",
     "sprite_4.png"
   );
   leftPlayerImg = loadAnimation(
     "Left/sprite_0.png",
     "Left/sprite_1.png",
     "Left/sprite_2.png",
     "Left/sprite_3.png"
   );
   shootingImg = loadAnimation(
     "player00.png",
     "player01.png",
     "player02.png",
     "player03.png",
     "player04.png",
     "player05.png",
     "player06.png",
     "player07.png",
     "player08.png",
     "player09.png",
     "player10.png",
     "player11.png",
     "player12.png",
     "player13.png",
     "player14.png",
     "player15.png"
   );
   courtImg = loadImage("Court.png")
   hoopImg = loadImage("hoop.png")
   idlePlayerImg = loadAnimation("player.png")
   
}

function setup() {
  createCanvas(1000,500);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  var options = 
  {
    isStatic:true
  }

  
  court = createSprite(500, 250)
  court.addImage(courtImg)
  court.scale = 3.5

  basketball1 = Bodies.circle(470, 300, 40,options)
  World.add(world, basketball1)

  basketball2 = Bodies.circle(570, 300, 40, options);
  World.add(world, basketball2);
    
  
 

  hoop = createSprite(75, 250)
  hoop.addImage(hoopImg)
  hoop.scale = 0.75
  
  hoop2 = createSprite(925, 250);
  hoop2.addImage(hoopImg);
  hoop2.scale = 0.75;

  player = createSprite(500, 400)
  player.addAnimation("running", playerImg)
  player.addAnimation("leftRunning", leftPlayerImg)
  player.addAnimation("standing", idlePlayerImg)
  player.addAnimation("shooting", shootingImg)
  player.scale = 0.7




  imageMode(CENTER)
}

function draw() 
{
 
  background(51);
  drawSprites();
 
  if(keyDown("RIGHT_ARROW"))
 {
   player.changeAnimation("running")
   player.x = player.x + 5
   player.scale = 0.7
 }
 
 
 else if(keyDown("LEFT_ARROW")) {
   player.changeAnimation("leftRunning");
   player.x = player.x - 5;
   player.scale = 0.7
 }

 else if (keyDown("UP_ARROW")) {
   //player.changeAnimation("standing");
   player.y = player.y - 5;
   player.scale = 0.7
 }
 
 else if (keyDown("DOWN_ARROW")) {
   //player.changeAnimation("standing");
   player.y = player.y + 5;
   player.scale = 0.7
 }

 else 
 {
    player.changeAnimation("standing")
    player.scale = 0.35
 }

 //if(keyDown("space") )
 //{
  //  player.changeAnimation("shooting")
   // Matter.Body.setVelocity(basketball1, {x:0.2, y:-0.2})
   // player.scale = 1.5
    
 //}

 if (keyDown("Q")) {
  
   Matter.Body.setStatic(basketball1, false)
   Matter.Body.applyForce(basketball1, { x: 0, y: 0 }, {x:-0.1, y:-0.05});
 }

 if (keyDown("E")) {
  
   Matter.Body.setStatic(basketball2, false)
   Matter.Body.applyForce(basketball2, { x: 0, y: 0 }, {x:0.1, y:-0.05});
 }

 

 player.x = mouseX
 player.y = mouseY

 if(player.x > width/2)
 {
   player.changeAnimation("running");
   player.scale = 0.7
 }

 if (player.x < width / 2) {
   player.changeAnimation("leftRunning");
   player.scale = 0.7;
 }

  if (player.x == width / 2) {
    player.changeAnimation("standing");
    player.scale = 0.35;
  }

   image(basketballImg, basketball1.position.x, basketball1.position.y, 60, 60)
   image(basketballImg, basketball2.position.x, basketball2.position.y, 60, 60);
 
  
  
  Engine.update(engine)

  

}

