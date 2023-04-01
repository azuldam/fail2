class Boat {
  constructor(x, y, width, height, boatPos, BoatAnimation) {
  
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.boatPosition = boatPos;
    this.image = loadImage("./assets/boat.png");
    this.animation = BoatAnimation
    this.speed = 0.1

    World.add(world, this.body);
  }

  remove(index) {
    setTimeout(() => {
      Matter.World.remove(world, boats[index].body);
      delete boats[index];
    }, 2000);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;

    var i = floor(this.speed % this.animation.lenght);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[i], 0, this.boatPosition, this.width, this.height);
    pop();
  }


  animate (){

    this.speed += 0.05

  }
}

