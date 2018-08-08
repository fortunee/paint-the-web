const canvas = document.getElementById('canvas');
let painting;
let mouseDrag = false;

/**
 * on mousedown we engage our canvas
 * @param {object} e 
 */
const engage = (e) => {
    mouseDrag = true;
    painting.lineDraw(e);
}

/**
 * On mouseup we disengage and begin a new path
 * @param {object} e 
 */
const disengage = (e) => {
    mouseDrag = false;
    painting.context.beginPath();
}

const initializePainting = (canvas) => {
    painting = new Paint(canvas);
    painting.initStrokeWidth();
    painting.bindEventsToDrawingSettings();
    painting.bindEventsToDrawingTools();


    canvas.addEventListener('mousedown', engage);
    canvas.addEventListener('mouseup', disengage);
    canvas.addEventListener('mousemove', lineDrawing);
    canvas.addEventListener('click', shapeDrawing);
}

initializePainting(canvas);

