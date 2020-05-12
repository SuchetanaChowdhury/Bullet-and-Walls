function hasCollided(object1, object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2){
    object2.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(wall.width*wall.width*wall.width)

    if(damage <10) {
    wall.shapeColor = "green";
    }

    if(damage >10){
    wall.shapeColor = "red";
    }
    }
}
