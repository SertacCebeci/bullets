class player{
    constructor(posx, posy, game){
        this.x = posx;
        this.y = posy;
        this.r = 32;
        this.projs = [];
        this.bar = new hbar();
        this.shootable = this.once();
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

    once(){
        let clickable = true;
        return function(){
            if(clickable){
                clickable = false
                setTimeout( () => {
                    clickable = true
                }, 100)
                return true;
            } else{
                return false
            }
        }
    }

    destroyProj(idx){
        this.projs.splice(idx, 1);
    }

    shoot(tx, ty){
        if(this.shootable()){
            this.projs.push(new proj(this.x, this.y, tx, ty));
            this.takeDmg(1)
        }
    }

    takeDmg(val){
        this.bar.reduce(val)
    }
}