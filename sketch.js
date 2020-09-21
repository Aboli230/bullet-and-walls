  var bullet,wall;
  var speed,weight,thickness;

  function setup() {
    createCanvas(1600,400);

    speed=random(223,321);
    weight=random(30,52)
    thickness=random(22,83)

    bullet =createSprite(50,200,50,50);
    bullet.shapeColor=("white");
    bullet.velocityX=speed;

    wall=createSprite(1200,200,thickness,height/2)
    wall.shapeColor=("pink");
}

function draw() {
  background(0,0,0);  

   if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5*weight*speed*speed/thickness*thickness*thickness;
  
    if( damage>10 ){
      wall.shapeColor=color(255,0,0);
      }

    if ( damage<10 ){
        wall.shapecolor=color(230,230,0);
    }
  }
  
    drawSprites();
  }
  function hascollided(bullet1,wall1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEddge=wall1.x
  if(bulletRightEdge>=wallLeftEddge){
    return true;

  }
  return false;

  }