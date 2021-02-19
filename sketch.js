var backImg;
var balloon,balloonImage;

function preload() {

  backImg=loadImage("Hot Air Ballon-01.png");
balloonImage = loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
  
  }

function setup() {
  database = firebase.database();
  createCanvas(800,400);

  balloon = createSprite(100 ,300,20,20);
balloon.addAnimation("balloon",balloonImage);
balloon.scale = 0.6;

var locofnod = database.ref("balloon/position");
locofnod.on("value",readPosition,showError);

 
}

function draw() {
  background(backImg);
  
  if(keyDown(LEFT_ARROW)){
   changePosition(-2,0)
  }

  else if(keyDown(UP_ARROW)){
    changePosition(0,-2)
    balloon.scale = balloon.scale - 0.0045;
  }

  else if(keyDown(RIGHT_ARROW)){
    changePosition(+2,0)
  }

  else if(keyDown(DOWN_ARROW)){
    changePosition(0,+2)
    balloon.scale = balloon.scale + 0.0045;
  }
 
  drawSprites();
  fill("red")
stroke(0)
textSize(25)
text("*move balloon with the arrow keys*",10,30);
}

function changePosition(x,y){
  balloon.x = balloon.x + x;
  balloon.y = balloon.y + y;
}

function readPosition(data){

  position = data.val()
  balloon.x = position.x;
  balloon.y = position.y;
  
  }

  function showError(){

    console.log(error)
}