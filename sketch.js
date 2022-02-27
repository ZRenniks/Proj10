var jakeRunning, jakeImg, jake
var road, roadImg; 

function preload(){
  //pre-load images
  jakeRunning = loadAnimation("jake2.png","jake3.png","jake5.png")
  roadImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,700);
  //create sprites here
  jakeImg = createSprite(200,650,20,20)
  jakeImg.addAnimation("jakeRunning",jakeRunning)
  
  
  road = createSprite(200,200,20,20)
  road.addImage("roadImg",roadImg)
}

function draw() {
  background(0);
  drawSprites();

  jakeImg.depth = road.depth + 1
  jakeImg.x = mouseX;
}