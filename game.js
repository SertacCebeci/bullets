class game{
    constructor(w, h, enemyNumber){
        this.w = w;
        this.h = h;
        this.p1 = new player(w / 2, h * 8 / 9);
        this.score = 10;
        this.nys = [];
        for(let i = 0; i < enemyNumber; i++){
            this.nys.push(new nydus(Math.random() * (w-40) + 20))
        }
        this.gameover = false;
    }

    update(){
        this.checkgameover()
        if(!this.gameover){
            for(let i = 0; i < this.nys.length; i++){
                this.nys[i].update()
            }
            this.p1.update();
            this.colls();
        } else{
            push();
            fill(255);
            textSize(32);
            text('game over', this.w / 2 - 74, this.h / 2);
            pop();
        }
        this.draw()
    }

    colls(){
        //console.log('cols');
        for (let i = 0; i < this.p1.projs.length; i++) {
            const project = this.p1.projs[i];

            for (let n = 0; n < this.nys.length; n++) {
                const nyds = this.nys[n]

                for (let en = 0; en < nyds.enemies.length; en++) {
                    const enmy = nyds.enemies[en];

                    if( c2c(enmy.x, enmy.y, enmy.r, project.x, project.y, project.r)){
                        this.p1.destroyProj(i);
                        this.enemyShootAction(enmy, en, n)
                        this.increaseScrore()
                    }
                }
            }
        }

        for (let n = 0; n < this.nys.length; n++) {
            const nyds = this.nys[n]

            for (let en = 0; en < nyds.enemies.length; en++) {
                const enmy = nyds.enemies[en];

                if(r2r(enmy.x, enmy.y, enmy.r, enmy.r, this.p1.bar.x, this.p1.bar.y, this.p1.bar.w, this.p1.bar.h)){
                    this.enemyReachAction(enmy, en, n)
                }
            }
        }
    }

    checkgameover(){
        if(this.p1.bar.val <= 0){
            this.gameover = true
        }
    }

    heal(){
        this.p1.bar.increase()
    }

    draw(){
        push();
        textSize(16);
        let scoretext = "Score: " + this.score;
        fill(255);
        text(scoretext, 10, 40)
        pop();
    }

    increaseScrore(){
        this.score += 5;
    }

    enemyShootAction(enmy, en, n){
        let type = enmy.type
        if(type === 0){
            this.nys[n].destroyEnemy(en);
        }
        else if(type === 1){
            this.nys[n].destroyEnemy(en);
            this.heal(10)
        }
        else if(type === 2){
            this.p1.bar.reduce()
        }
    }

    enemyReachAction(enmy, en, n){
        let type = enmy.type
        if(type === 0){
            this.nys[n].destroyEnemy(en);
            this.p1.bar.reduce()
        }
        else if(type === 1){
            this.nys[n].destroyEnemy(en);
            this.p1.bar.reduce()
        }
        else if(type === 2){
            this.nys[n].destroyEnemy(en);
            this.heal()
        }
    }
    decreaseScore(){
        this.score--;
    }

}
