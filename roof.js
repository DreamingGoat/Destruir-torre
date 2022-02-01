class roof
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    display()
    {

            var Roof=this.body.position;

            push()
            translate(Roof.x, Roof.y);
            rectMode(CENTER)
            fill(128,128,128)
            rect(0,0,this.w, this.h);
            pop()
    }
    
}