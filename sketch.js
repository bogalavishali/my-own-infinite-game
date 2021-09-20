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
trex.setCollider("circle",0,0,50);
trex.debug = true;
score = 0

fruitGroup = new Group();
}






function draw() {
background(180);
 //scoring
 //score = score + Math.round(frameCount/150);

edges = createEdgeSprites();

if(keyDown("Up")){
    trex.y = trex.y +  -5;
}
if(keyDown("Down")){
    trex.y = trex.y +  5;
}



if (path.x < 0){
    path.x = path.width/2;
  }

  if(trex.isTouching(fruitGroup)){
      score = score + 1;
      fruitGroup.destroyEach();
  }
  
  //spawn the fruits
spawnFruits();
  

  

drawSprites();
textSize(20);
fill(255);
text("Score: "+score,1100,50); 
}

function spawnFruits(){
if (frameCount % 100 == 0) {
 var fruits = createSprite(1100,Math.round(random(50,250)),20,20);
 fruits.addImage(fruitImg) 
 fruits.scale = 0.1;
 fruits.velocityX = -3;
 fruits.lifetime = 450;
 fruitGroup.add(fruits);


 }
}
          

    
 
