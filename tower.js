class tower
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1

        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options)
        World.add(world, this.body);
    }
    display()
    {

            var Tower=this.body.position;
            push()
            translate(Tower.x, Tower.y);
            rectMode(CENTER)
            strokeWeight(4);
            fill(255,0,255)
            rect(0,0,this.w, this.h);
            pop()
    }

}