var frect,mrect;



function setup() {
  createCanvas(1800,800);
  frect=createSprite(400, 200, 100, 50);
  frect.shapeColor="green";
  frect.debug=true;
  mrect=createSprite(800, 200, 200, 150);
  mrect.shapeColor="green";
  mrect.debug=true;
}

function draw() {
  background(0,0,0);  
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  if(mrect.x-frect.x<frect.width/2+mrect.width/2
    &&frect.x-mrect.x<frect.width/2+mrect.width/2
    &&mrect.y-frect.y<frect.height/2+mrect.height/2
    &&frect.y-mrect.y<frect.height/2+mrect.height/2){
    mrect.shapeColor="red";
    frect.shapeColor="red";
  }else {
    frect.shapeColor="green";
    mrect.shapeColor="green";
  }
  drawSprites();
}