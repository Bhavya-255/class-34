class rock{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/rock1.png");
    }
    show()
    {
        //rectMode(CENTER);
        //rect(this.body.position.x, this.body.position.y,this.width, this.height);
         imageMode(CENTER)
        image(this.image,this.body.positsion.x,this.body.positsion.y,this.width,this.height)
    }
  
  
  }