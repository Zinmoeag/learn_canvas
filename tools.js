const getMousePosOnEl = (el, event) => {
    const rect  = el.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    return [x,y];
}

const getDistanceTwoPoint = (p1, p2) => {
    const formula = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

    return formula;
}


//for rect
const mouse_in_shape = (x, y , shape) => {
    const shap_top = shape.y;
    const shap_bottom = shape.y  + shape.height;
    const shap_left = shape.x;
    const shap_right = shape.x + shape.width;

    if(y > shap_top && y < shap_bottom &&  x > shap_left && x < shap_right ){
        return true;
    }
    return false;
    // return [shap_bottom, shap_top, shap_left, shap_right]
}