const RoboSprite = new Image();
RoboSprite.src = "Robo.png";

class Bird {
    constructor(){
        this.x = 150;
        this.y = 150;
        this.vy = 0;
        this.originalWidth = 160;
        this.originalHeight = 110;
        this.width = this.originalWidth/5;
        this.height = this.originalHeight/5;
        this.weight = 1;
    }
    update(){
        let curve = Math.sin(angle) * 7;
        if (this.y > canvas.height - (this.height * 3) + curve){
            this.y = canvas.height - (this.height * 3) + curve;
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        }
        if (this.y < 0 + this.height){
            this.y = 0 + this.height;
            this.vy = 0;
        }
        if (spacePressed && this.y > this.height * 3) this.flap();
      
    } 
    draw(){
        ctx.fillStyle = 'white';
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(RoboSprite, 55, 85, bird.originalWidth, bird.originalHeight, bird.x, bird.y, bird.width * 1.7, bird.height * 1.7);
    }
    flap(){
        this.vy -= 2.2;
    }
}
const bird = new Bird();
