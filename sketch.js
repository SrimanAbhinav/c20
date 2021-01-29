var fixedRec,movingRec

function setup() {
  createCanvas(1200,800);
  fixedRec=createSprite(600, 400, 50, 80);
  fixedRec.shapeColor="black";
  fixedRec.debug=true;

  movingRec=createSprite(400, 200, 80, 50);
  movingRec.shapeColor="black";
  movingRec.debug=true;
}

function draw() {
  background(255,255,255); 
  movingRec.x=World.mouseX;
  movingRec.y=World.mouseY;

//console.log(movingRex.x-fixedRec.x);

  if (movingRec.x-fixedRec.x < fixedRec.width/2 + movingRec.width/2 
    && fixedRec.x-movingRec.x < fixedRec.width/2 + movingRec.width/2
    && movingRec.y-fixedRec.y < fixedRec.width/2 + movingRec.width/2 
    && fixedRec.y-movingRec.y < fixedRec.width/2 + movingRec.width/2){

    fixedRec.shapeColor="blue";
    movingRec.shapeColor="blue";
  }
  else{
    fixedRec.shapeColor="black";
    movingRec.shapeColor="black";
  }

  drawSprites();

}