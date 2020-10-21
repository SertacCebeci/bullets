class enemy{
    constructor(x, y, game){

        this.x = x;
        this.y = y;
        this.r = 20;

        this.speed = 2;

        this.game = game;

        this.type = Math.random() < 0.15
    }

    draw(){
        push();
        if(this.type){
            fill(100, 200, 100);
        }else{
            fill(200, 100, 100);
        }
        circle(this.x, this.y, this.r);
        pop();
    }

    update(){
        this.y = this.y + this.speed;
        this.draw()
    }
}