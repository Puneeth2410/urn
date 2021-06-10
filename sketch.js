
function preload(){
  //pre-load images
  path.loadImage(path.png);
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path=createSprite(200,200);
  path.addImage(pathImg)
  path.velocityY=4;
  path.scale+1.2;
  runner=createSprite(180,340,30,30);
  runner.scale=0.08;
  runner.addImage(runnerImg)
  leftBoundary=createSprite(0,0,100,800)
  leftBoundary.visible=false;
  rightBoundary=createSprite(410,0,100,800)
  rightBoundary.visible=false;
}


function draw() {
  background(0);
  path.velocityY=4;
  runner.x = World.mouseX;
  edges= createEdgesSprite();
  runner.collide(edges[3]);
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);
  if(path.y> 400){
    path.y = height/2
  }

  drawSprirtes();
}
