var wall, thickness;
var bullet, weight, speed;

function setup() {
  createCanvas(1600,400);
  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);
  bullet = createSprite(400, 200, 40, 10);
  bullet.shapeColor = "white";
  weight = random(30, 52);
  speed = random(223, 321);
  bullet.velocityX = speed;
}

function draw() {
  background("pink");  

if(wall.x - bullet.x < wall.width/2 + bullet.width/2){
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(wall.width*wall.width*wall.width)
   //var damage = 0.5*44*300*300/50*50*50;

  if(damage <10) {
  wall.shapeColor = "green";
  }

  if(damage >10){
  wall.shapeColor = "red";
  }
}
  
  drawSprites();
}