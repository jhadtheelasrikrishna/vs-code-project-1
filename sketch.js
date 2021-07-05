var water 
function setup() {
  createCanvas(400,400);
  water=createSprite(200,200,10,10)
  water.shapeColor="red"
}

function draw() 

{
  background(30);
drawSprites();
if (keyIsDown(RIGHT_ARROW)){
water.x=water.x+5

}
if (keyIsDown(LEFT_ARROW)){
water.x=water.x-5



}
if (keyIsDown(UP_ARROW)){
  water.y=water.y-5
}
if (keyIsDown(DOWN_ARROW)){
  water.y=water.y+5
}


}
