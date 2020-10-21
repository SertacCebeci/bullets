class player{
    constructor(posx, posy){
        this.x = posx;
        this.y = posy;
        this.r = 32;
        this.projs = [];
        this.bar = new hbar();
    }

    draw(){
        push();
        fill(200);
        circle(this.x, this.y, this.r);
        pop();
        this.bar.draw()
    }

    update(){
        for(let i = 0; i < this.projs.length; i++){
            if(isInside(this.projs[i].x, this.projs[i].y, this.projs[i].r, this.projs[i].r, w, h)){
                this.projs[i].update();
            } else{
                this.projs.splice(i, 1);
            }
        }
        this.draw()
    }

    destroyProj(idx){
        this.projs.splice(idx, 1);
    }

    shoot(tx, ty){
        this.projs.push(new proj(this.x, this.y, tx, ty));
        //console.log(this.projs);
    }

    takeDmg(val){
        this.bar.reduce(val)
    }
}