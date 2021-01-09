var fixedRect,movingRect;
var rect1;
var rect2;

function setup() {
  createCanvas(800,800);
  fixedRect= createSprite(100, 200, 50, 80);
  movingRect= createSprite(300, 200, 80, 30);
  rect1 = createSprite(500,200,90,45);
  rect2 = createSprite(700,200,30,20);
  

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,fixedRect)){
     movingRect.shapeColor="red";
     fixedRect.shapeColor="red";
  }
  else if(isTouching(rect1,movingRect)){
     movingRect.shapeColor="green";
     rect1.shapeColor="green";
  }
  else if (isTouching(rect2,movingRect)){
    movingRect.shapeColor="orange";
    rect2.shapeColor="orange";
  }
  else {
    movingRect.shapeColor="blue";
    rect2.shapeColor="blue";
    fixedRect.shapeColor="blue";
    rect1.shapeColor="blue";
    
  }
  

  drawSprites();
}

