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

  hasCollided(wall, bullet);
  drawSprites();
}