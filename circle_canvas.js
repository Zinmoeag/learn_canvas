const canvas = document.getElementById("canvas");

const win_width = window.innerWidth;
const win_height = window.innerHeight

canvas.width = win_width;
canvas.height = win_height;

const ctx = canvas.getContext("2d");

class circle {
    constructor(x, y , radius, color, text, speed){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.text = text;

        this.speed = speed;

        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
        this.hitWall = 0;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillText(this.hitWall, this.x, this.y)
        
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.strokeStyle = this.color;
        ctx.textAlign = "center";
        ctx.textBaseLine = "middle";
        ctx.font = "20px Arial"
        ctx.closePath();
    }

    //ball behavour
    // dx = direction positon
    update(){
        this.draw(ctx);

        this.hitX(() => (this.x + this.radius) > win_width)
        this.hitX(() => (this.x - this.radius) < 0)
        this.hitY(() => (this.y + this.radius) > win_height)
        this.hitY(() => (this.y - this.radius) < 0)

        this.x += this.dx;
        this.y += this.dy;

    }

    hitX(condition) {
        if(condition()){
            this.hitWall++;
            this.dx = - this.dx;
        }
    }

    hitY(condition) {
        if(condition()){
            this.hitWall++;
            this.dy = - this.dy;
        }
    }
}

const random_loc_x = Math.random() *win_width ;
const random_loc_y = Math.random() * win_height;

let mycircle = new circle(300, 400, 200, "black", "ball", 1);
let mycircle1 =  new circle(random_loc_x, random_loc_y, 50, "black", "ball", 10);
// let mycircle2 = new circle(300, 300, 20, "black", "ball", 6);
// let mycircle3 =  new circle(random_loc_x, random_loc_y, 50, "black", "ball", 2);
// let mycircle4 = new circle(200, 200, 50, "black", "ball", 10);
// let mycircle5 =  new circle(random_loc_x, random_loc_y, 50, "black", "ball", 2);

//finding distance for collide


// distance is less than radius
const animation = () => {
    requestAnimationFrame(animation);
    ctx.clearRect(0,0,win_width , win_height)

    if(getDistanceTwoPoint(mycircle, mycircle1) < mycircle.radius + mycircle1.radius){
        mycircle.color = "red"
    }else{
        mycircle.color = "black"
    }

    mycircle.update()
    mycircle1.update()
    // mycircle2.update()
    // mycircle3.update()
    // mycircle4.update()
    // mycircle5.update()
}

console.log(random_loc_x, random_loc_y)

animation() 