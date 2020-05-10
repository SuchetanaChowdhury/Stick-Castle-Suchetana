class Box{
    constructor(x, y, width, height, color) {
        var options = {
             'isStatic': true,
             'density':1.0
         }
        this.body = Bodies.rectangle(x, y, width, height, options, color);
        this.width = width;
        this.height = height;
        this.shapeColor = color;
        
        
         World.add(world, this.body);
      }
    display(){
        rectMode(CENTER)
        stroke("black");
        strokeWeight(5);
        fill(this.shapeColor);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}