class nydus{
    constructor(x, game){
        this.x = x;
        this.y = 0;
        this.enemies = [];
        this.game = game;

        setInterval( () => {
            this.makeEnemy()
        }, (Math.random() * 3000 + 1000))
    }

    makeEnemy(){
        this.enemies.push(new enemy(this.x, this.y, this.game))
    }

    destroyEnemy(idx){
        this.enemies.splice(idx, 1);
    }

    update(){
        //this.draw()
        for(let i = 0; i < this.enemies.length; i++){
            if(isInside(this.enemies[i].x, this.enemies[i].y, this.enemies[i].r, this.enemies[i].r, w, h)){
                this.enemies[i].update();
            }else{
                this.destroyEnemy(i);
            }
            
        }
    }

    draw(){
        push();
        fill(255);
        circle(this.x, this.y, 40);
        pop();
    }
}