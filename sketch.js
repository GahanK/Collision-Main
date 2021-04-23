
var fixedRect, movingRect;
var gameObject1, gameObject2; 
var a,b;
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  rect1 = createSprite(300, 200, 50, 50);
  rect1.shapeColor = "blue";
  rect2 = createSprite(600,200,50,50);
  rect2.shapeColor = "red";
  rect2.velocityX = -5
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
isTouching(movingRect,fixedRect);

  //console.log(isTouching(movingRect,fixedRect))

bounceOff(rect2,rect1);
//rect2.velocityY= -5
//rect2.velocityX = -5
  drawSprites(); 
}
// arguments- input
//return value-output



