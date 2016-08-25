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
