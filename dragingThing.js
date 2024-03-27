const canvas = document.getElementById("canvas");

const win_width = window.innerWidth;
const win_height = window.innerHeight

canvas.width = win_width;
canvas.height = win_height;
canvas.style.border = "2px solid red";

const ctx = canvas.getContext("2d");

let current_shape_index = null; 
let is_draggable = false;
let startX;
let startY;


const shapes = [
    {x : 500, y :100,width : 400,height : 400, color : "red"} ,
    {x : 0, y :0,width : 200,height : 200, color : "blue"} ,
]

const drawShapes = () => {
    ctx.clearRect(0,0,win_width , win_height)
    for(let shap of shapes){
        ctx.fillStyle = shap.color;
        ctx.fillRect(shap.x, shap.y, shap.width, shap.height);
    }
}

const start_dragging = (e) => {
        const [mouseX, mouseY] = getMousePosOnEl(canvas, e);
        startX = mouseX;
        startY = mouseY;
    
        let index = 0;
        for(let shape of shapes){
            if(mouse_in_shape(mouseX, mouseY, shape)){
                current_shape_index = index;
                is_draggable = true;
                
                return;
            }

            index ++
        }
    
        is_draggable = false;
}

const doing_dragging = (e) => {
    if(!is_draggable){
        return;
    }else{
        let [mouseX, mouseY] = getMousePosOnEl(canvas,e);

        let dx = mouseX - startX;
        let dy = mouseY - startY;

        const current_shape = shapes[current_shape_index];

        current_shape.x += dx;
        current_shape.y += dy;

        drawShapes();

        startX = mouseX;
        startY = mouseY;
    }
}

const cancle_dragging = (e) => {
    is_draggable = false;
}

drawShapes()

//event
canvas.addEventListener("mousedown", start_dragging);
canvas.addEventListener("mousemove", doing_dragging);
canvas.addEventListener("mouseout", cancle_dragging);
canvas.addEventListener("mouseup", cancle_dragging);
