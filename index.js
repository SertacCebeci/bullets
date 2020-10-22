var w = 300;
var h = 600;
var g;

function setup(){
    createCanvas(w, h);
    g = new game(w, h, 5);
}

function draw(){
    background(100);
    g.update();
}

function mousePressed(){
    g.p1.shoot(mouseX, mouseY)
}