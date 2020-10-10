var movingrect;
var fixedrect;
var r1, r2;


function setup() {
  createCanvas(400,400);
  
  movingrect=createSprite(100,100,100,100);
  fixedrect=createSprite(400,100,100,100);

  r1=createSprite(100,300,100,100);
  r2=createSprite(350,300,100,100);
  r1.velocityX=2;
  r2.velocityX=-2;

}

function draw() {

  background("black");  
  
  movingrect.x=mouseX
  movingrect.y=mouseY;
   
  if(isTouching(movingrect,fixedrect))
  {
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green"
  }
  else
  {
    movingrect.shapeColor="yellow";
    fixedrect.shapeColor="yellow";
  }
   
  bounce(r1,r2);

  //Algorithms
 
  drawSprites();
}

