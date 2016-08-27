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
        }else if(canvasClass.drawMode == 'Eraser'){
          canvasClass.eraseStuff(e);
        }
    }
};

/* Draw a shape */
var drawShape = function(e){
  if(canvasClass.drawMode == 'Circle'){
    canvasClass.drawCircle(e);
  }else if (canvasClass.drawMode == 'Rectangle') {
    canvasClass.drawRectangle(e);
  }else if (canvasClass.drawMode == 'Triangle') {
    canvasClass.drawTriangle(e);
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

    /* Bind mouse events to canvas */
    canvas.addEventListener('mousedown', engage);
    canvas.addEventListener('mouseup', disengage);
    canvas.addEventListener('mousemove', drawLine);
    canvas.addEventListener('click', drawShape);
};

initializeCanvas(canvas);

/* Clear the canvas for a new drawing */
document.getElementById('clearScreen')
  .addEventListener('click', function(){
    canvasClass.context.clearRect(0, 0,
      canvasClass.canvas.width,
      canvasClass.canvas.height);
});

/* Save drawing on canvas */
document.getElementById('saveBtn')
  .addEventListener('click', function(){
    canvasClass.saveDrawing();
});

/* Share drawing to twitter */
document.getElementById('shareBtn')
  .addEventListener('click', function(){
      canvasClass.tweetDrawing()
});
