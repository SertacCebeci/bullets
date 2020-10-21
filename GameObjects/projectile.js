class proj{
    constructor(sx, sy, tx, ty, r){
        this.x = sx;
        this.y = sy;
        this.tx = tx;
        this.ty = ty;
        this.r = 10;

        let dist = Math.sqrt(Math.pow((tx - sx), 2) +  Math.pow((ty - sy), 2))

        this.unit = {
            x: 5*(tx - sx) / dist,
            y: 5*(ty - sy) / dist
        }
    }


    draw(){
        push();
        fill(200);
        circle(this.x, this.y, this.r);
        pop();
    }

    update(){
        this.x = this.x + this.unit.x;
        this.y = this.y + this.unit.y;
        this.draw()
    }
}