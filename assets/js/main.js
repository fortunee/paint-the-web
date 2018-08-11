const canvas = document.getElementById('canvas');
const clearScreenBtn = document.getElementById('clearScreen');
const saveBtn = document.getElementById('saveBtn');
const tweetBtn = document.getElementById('tweetBtn');

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

const startLineDrawing = (e) => {
    const drawingTool = painting.currentDrawingTool;
    if (mouseDrag && drawingTool === 'pencil') {
        painting.lineDraw(e);
    } else if (mouseDrag && drawingTool === 'eraser') {
        painting.eraseStuff(e);
    }
}

const startShapeDrawing = (e) => {
    const drawingTool = painting.currentDrawingTool;
    
    if (drawingTool === 'circle') {
        painting.circleDraw(e);
    }

    if (drawingTool === 'rectangle') {
        painting.rectangleDraw(e);
    }

    if (drawingTool === 'triangle') {
        painting.triangleDraw(e);
    }
}

const clearScreen = () => {
    painting.clearScreen();
}

const saveDrawing = () => {
    painting.saveDrawing();
}

const tweetDrawing = () => {
    painting.tweetDrawing();
}

const initializePainting = (canvas) => {
    painting = new Paint(canvas);
    painting.initStrokeWidth();
    painting.bindEventsToDrawingSettings();
    painting.bindEventsToDrawingTools();


    canvas.addEventListener('mousedown', engage);
    canvas.addEventListener('mouseup', disengage);
    canvas.addEventListener('mousemove', startLineDrawing);
    canvas.addEventListener('click', startShapeDrawing);

    clearScreenBtn.addEventListener('click', clearScreen);
    saveBtn.addEventListener('click', saveDrawing);
    tweetBtn.addEventListener('click', tweetDrawing);
}

initializePainting(canvas);
