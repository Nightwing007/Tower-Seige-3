class Ground {
    constructor(x,y,width) {
      var options = {
          isStatic: true,
          resitution : 0.1,
          friction : 0.5
      }
      this.body = Bodies.rectangle(x,y,width,10,options);
      this.width = width;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, 10);
    }
  }
