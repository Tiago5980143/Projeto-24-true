class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3.0,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 80;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill('green')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  