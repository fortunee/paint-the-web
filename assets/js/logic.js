/**
* Implement some logic to use the CanvasClass
*/
var canvas = document.getElementById('canvas');

var CanvasClass;
var dragging = false;

/* Use the draw line functionality */
var drawLine = function(e){
    if(dragging){
        console.log(canvasClass.drawMode);
        if(canvasClass.drawMode == 'Pencil'){
            canvasClass.drawLine(e);
        }
    }
};

/* Add functionality on mouse contact with canvas */
var engage = function(e){
    dragging = true;
    canvasClass.drawLine(e);
};

/* Removes functionality on mouse contact with canvas */
var disengage = function(){
    dragging = false ;
    canvasClass.context.beginPath();
};

/* Creates a canvas object and setsup some methods */
var initializeCanvas = function(canvas){
    canvasClass = new CanvasClass(canvas);
    canvasClass.initStrokeWidth();
    canvasClass.bindSettingsChangeListenters();
    canvasClass.bindDrawingModesChangeListener();

    /* Bind events to canvas */
    canvas.addEventListener('mousedown', engage);
    canvas.addEventListener('mouseup', disengage);
    canvas.addEventListener('mousemove', drawLine);
};

initializeCanvas(canvas);
