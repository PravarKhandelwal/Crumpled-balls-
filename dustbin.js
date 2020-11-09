class dustbin{
    constructor(x,y,angle)
    {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.bottom=Bodies.rectangle(this.x, this.y, 200, 20, {isStatic:true})
        this.left=Bodies.rectangle(this.x-200/2, this.y-100/2, 20, 100, {isStatic:true})
        Matter.Body.setAngle(this.left, this.angle);
        this.right=Bodies.rectangle(this.x+200/2, this.y-100/2, 20, 100, {isStatic:true})
        Matter.Body.setAngle(this.right, 1.5*this.angle);
        World.add(world, this.bottom)
		World.add(world, this.left)
		World.add(world, this.right);
    }
    
    display()
    {
        console.log("hello");
        var posBottom=this.bottom.position;
	    var posLeft=this.left.position;
        var posRight=this.right.position;
       
        
        push ()
        var a = this.left.angle;
        rotate(a)
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER)
        rotate(this.angle)
        rect(0,0,20,200);
        pop()
        
        push ()
        var a = this.right.angle;
        rotate(a)
        translate(posRight.x, posRight.y);
		rectMode(CENTER);
        rotate(-1*this.angle)
        rect(0,0,20,200);
        pop()

        push()
        rotate(a)
		translate(posBottom.x, posBottom.y);
        rectMode(CENTER)
        rect(0,0,20,200);
		pop()
    }
    
}