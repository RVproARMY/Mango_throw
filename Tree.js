class Tree{

    constructor(x,y){
      this.x = x
      this.y = y
      this.TreeWidth = 450;
      this.TreeHeight = 600;
      this.wallThickness = 10;

      this.image = loadImage("images/tree.png")
      this.bottomBody = Bodies.rectangle(this.x, this.TreeWidth, this.wallThickness,{isStatic: true})
      this.leftWallBody = Bodies.rectangle(0, this.y- this.TreeHeight/2, this.wallThickness, this.TreeHeight,{isStatic:false})
      this.rightWallBody = Bodies.rectangle(this.x+ this.TreeWidth/2, this.y- this.TreeHeight/2, this.wallThickness, this.TreeHeight,{isStatic:false})

      World.add(world, this.bottomBody)
      World.add(world,leftWallbody)
      World.add(world,rightWallBody);   
    }

    display(){
         var posBottom = this.bottomBody.position;
         Push()
         translate()
    }
}