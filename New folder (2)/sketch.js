var fixedRect, movingRect,block1,block2,block3,block4,ball,edges;

function setup() {
  createCanvas(1200,800);
  block1 = createSprite(00, 580, 360, 30);
  block1.shapeColor = "green";
  block2 = createSprite(290, 580, 200, 30);
  block2.shapeColor = "blue";
  block3 = createSprite(515, 580, 200, 30);
  block3.shapeColor = "purple";
  block4 = createSprite(740, 580, 220, 30);
  block4.shapeColor = "red";
  ball = createSprite(random(20,750),100 , 40, 40);
  ball.shapeColor = "white";
  ball.velocityX = 4
  ball.velocityY = 9
}

function draw() {
  background("yellow");  
 edges=createEdgeSprites()
 ball.bounceOff(edges)
 if(ball.isTouching(block1)){
     ball.shapeColor="green"
 }
 if(ball.isTouching(block2)){
    ball.shapeColor="blue"
}
if(ball.isTouching(block3)){
    ball.shapeColor="purple"
}
if(ball.isTouching(block4)){
    ball.shapeColor="red"
}
  drawSprites();
}

