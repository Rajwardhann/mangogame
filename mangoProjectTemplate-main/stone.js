class stone
{
    constructor(x,y,r)
    {
        this.x = x;
        this.y = y;
        this.r = r;
        var options=
        {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body);
        
        this.img = loadImage("images/stone.png");
    }

    display()
    {
        push();
        imageMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        image(this.img,0,0,this.r,this.r);
        pop();
    }
}