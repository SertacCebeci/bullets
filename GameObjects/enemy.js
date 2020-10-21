class enemy{
    constructor(x, y, game){

        this.x = x;
        this.y = y;
        this.r = 20;

        this.speed = 2;

        this.game = game;

        this.type = -1
        let rnd = Math.random()
        if(rnd < 0.10){
            this.type = 1
        }else if(rnd > 0.10 && rnd < 0.25){
            this.type = 2
        }else{
            this.type = 0;
        }
    }

    draw(){
        push();
        if(this.type === 1){
            fill(100, 200, 100);
        }else if(this.type === 2){
            fill(100, 100, 200);
        }else{
            fill(200, 100, 100)
        }
        circle(this.x, this.y, this.r);
        pop();
    }

    update(){
        this.y = this.y + this.speed;
        this.draw()
    }
}