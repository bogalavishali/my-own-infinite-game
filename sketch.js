var trex, trex_running;
var fruitImg;
var path,pathImg;
var gameOverImg;
var gameOver;

var score;

var END =0;
var PLAY =1;
var gameState = PLAY;


function preload(){
 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 pathImg = loadImage("Road.png");
 fruitImg = loadImage("fruit1.png");

 



   

}

function setup() {
 createCanvas(1200,300);

 // Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

trex = createSprite(50,180,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
}




score = 0

function draw() {
background(180);
 //scoring
 score = score + Math.round(frameCount/150);

edges = createEdgeSprites();

if(keyDown("Up")){
    trex.y = trex.y +  -5;
}
if(keyDown("Down")){
    trex.y = trex.y +  5;
}

fruitGroup = new Group();

if (path.x < 0){
    path.x = path.width/2;
  }

  if(fruitGroup.isTouching(trex)){
      score = score + 1;
      fruitGroup.destroyEach();
  }
  
  //spawn the fruits
spawnFruits();
  

  

drawSprites();
textSize(20);
fill(255);
text("Score:0 ",1100,50); 
}

function spawnFruits(){
if (World.frameCount % 300 == 0) {
 var fruits = createSprite(Math.round(random(1500,400), 10, 50));
 fruits.addImage(fruitImg) 
 fruits.scale = 0.1;
 fruits.velocityX = -1;
 fruits.lifeTime = 200;
 fruitGroup.add(fruits);


 }
}
          

    
 
