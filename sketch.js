var bullet, thickness;
var wall, speed, weight; 

function setup() {
   createCanvas(1200,400);

   thickness = random(22,83); 
   speed = random(200,280); 
   weight = random(30,52); 

   bullet = createSprite(50, 200, 50, 20); 
   bullet.velocityX = speed; 
   bullet.shapeColor = "white";

   wall = createSprite(1100,200,thickness,height/2); 
   wall.shapeColor = color(80,80,80); 

  } 

function draw() { 
  background(0); 
  
    if (hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

     if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  
  }
  drawSprites();
}
