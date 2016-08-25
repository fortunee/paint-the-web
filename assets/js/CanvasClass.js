/** Canvas Class
*@class
*@param{object} canvasObj - The canvas object
*/
var CanvasClass = function(canvasObj){
    this.canvas = canvasObj;
    this.radius = 10;
    this.shapeSize = 100;
    this.context = this.canvas.getContext('2d');
    this.context.lineWidth = this.radius * 2 ;
    this.drawMode = 'Pencil' ;
};

/**
*  Stroke width
*/
CanvasClass.prototype.initStrokeWidth = function(){
    /* Set the stroke width */
    this.setStrokeWidth(document.getElementById('strokeRadius').value);
};

/**
* Drawing modes change binding
*/

CanvasClass.prototype.bindDrawingModesChangeListener = function(){
    var $this = this ;
    var items = document.getElementsByClassName('drawingTool');

    var binder = function(){
        $this.drawMode = this.getAttribute("data-title");
        var strokeColor = document.getElementById('strokeColor').value ;
        var fillColor = document.getElementById('fillColor').value ;
        $this.setFillcolor(fillColor);
        $this.setStrokeColor(strokeColor);
    };

    for(var i=0; i<items.length; i++){
        items[i].addEventListener('click', binder, false);
    }

};
