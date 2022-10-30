const obstaclesArray = [];

const TowerSprite = new Image();
TowerSprite.src = "Tower2.png";

const UFOSprite = new Image();
UFOSprite.src = "ufo.png";

class Obstacle {
    constructor(){
        this.top = (Math.random() * canvas.height/3) + 52;
        this.bottom = (Math.random() * canvas.height/3) + 52;
        this.x = canvas.width;
        this.width = 15;
        this.color = 'hsla(' + hue + ', 100%, 50%, 1)';
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.drawImage(TowerSprite, 0, 0, 1200, 500, this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
        ctx.drawImage(TowerSprite, 0, 0, 300, 300, this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
    update(){
        this.x -= gamespeed;
        this.draw();
    }
}

function handleObstacles(){
    if (frame%60 ===0){
        obstaclesArray.unshift(new Obstacle);
    }
    for (let i = 0; i < obstaclesArray.length; i++){
        obstaclesArray[i].update();
    }
    if (obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0]);
    }
}