var wall,thickness;
var bullet,speed,weight;




function setup() {
  createCanvas(1600,400);
 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);



  bullet = createSprite(50,200,60,10);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor= color(80,80,80);

  bullet.velocityX = 50;


}

function draw() {
  background("black");  

  if(collided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/thickness*3;

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
  }
  
  

  drawSprites();
}

function collided(bullet1,wall1){

  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;
   
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}