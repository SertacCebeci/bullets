class hbar{
    constructor(){
        this.val = 100;

        this.w = w;
        this.h = 40;

        this.x = 0;
        this.y = h - this.h;
    }

    draw(){
        push();
        fill(0);
        rect(this.x, this.y, w, this.h)
        fill(255, 0, 0);
        rect(this.x, this.y, this.w * this.val / 100, this.h);
        pop()
    }

    update(){
        this.draw()
    }

    reduce(val = 10){
        this.val = this.val - val;
    }

    increase(val = 5){
        this.val = this.val + val;
    }
}