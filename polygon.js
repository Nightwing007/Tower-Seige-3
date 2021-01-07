class Polygon {
    constructor(x,y) {
      var options = {
          isStatic: false,
          resitution : 0.1,
          friction : 0.5
      }
      this.body = Bodies.circle(x,y,30,options);
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("pink");
      image(this.image,pos.x, pos.y,75,75);
    }
  }
