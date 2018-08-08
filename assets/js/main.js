const canvas = document.getElementById('canvas');
let painting;
let mouseDrag = false;

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

