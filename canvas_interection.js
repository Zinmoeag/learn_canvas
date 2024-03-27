const canvas = document.getElementById("canvas");
const win_width = window.innerWidth;
const win_height = window.innerHeight
canvas.width = win_width;
canvas.height = win_height;

const ctx = canvas.getContext("2d");


class Circle {
    constructor(x,y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw (ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);

        ctx.strokeStyle = "yellow";
        ctx.lineWidth = 5;
        ctx.stroke();

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.closePath();
    }

    changeColor(color){
        this.color = color;
        this.draw(ctx)
    }
}


const circle1  = new Circle(300, 300, 100, "red");

canvas.addEventListener("mousemove", (e) => {
    const [mouseX, mouseY] = getMousePosOnEl(canvas, e);
    
    if(getDistanceTwoPoint(circle1, {x:mouseX, y:mouseY}) < circle1.radius){
        console.log("helloe")
        circle1.changeColor("blue")
    }else{
        circle1.changeColor("red")
    }
})
circle1.draw(ctx);

