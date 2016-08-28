/** Canvas Class
*@class
*@param{object} canvasObj - The canvas object
*/
var CanvasClass = function(canvasObj){
    this.canvas = canvasObj;
    this.radius = 10;
    this.shapeSize = 100;
    this.context = this.canvas.getContext('2d');
    this.context.lineWidth = this.radius * 2;
    this.drawMode = 'Pencil';
};

/**
 * Stroke width method
 * @function
 */
CanvasClass.prototype.initStrokeWidth = function(){
    /* Set the stroke width */
    this.setStrokeWidth(document.getElementById('strokeRadius').value);
};

/**
* Drawing modes change binding method
* @function
*/
CanvasClass.prototype
  .bindDrawingModesChangeListener = function(){
    var $this = this;
    var items = document.getElementsByClassName('drawingTool');

    /* Sets color values drawing tools */
    var binder = function(){
        $this.drawMode = this.getAttribute("data-title");
        var strokeColor = document.getElementById('strokeColor').value;
        var fillColor = document.getElementById('fillColor').value;
        $this.setFillcolor(fillColor);
        $this.setStrokeColor(strokeColor);
    };

    for(var i=0; i<items.length; i++){
        items[i].addEventListener('click', binder, false);
    }
};

/**
* Binds settings and changes events
* @function
*/
CanvasClass.prototype
  .bindSettingsChangeListenters = function(){
    var $this = this;

    /* Setup eraser */
    document.getElementById('eraser')
      .addEventListener('click', function(){
        $this.drawMode = this.getAttribute("data-title");
    });

    /* Event for setting pencil stroke & fill color */
    document.getElementById('pencilDraw')
      .addEventListener('click', function(){
        var pencilColor = document.getElementById('pencilColor').value;
        $this.drawMode = this.getAttribute("data-title");
        $this.setFillcolor(pencilColor);
        $this.setStrokeColor(pencilColor);
    });

    /* Changes stroke width value */
    document.getElementById('strokeRadius')
      .addEventListener('change', function(){
        $this.setStrokeWidth(this.value);
    });

    /* Changes stroke color value */
    document.getElementById('strokeColor')
      .addEventListener('change', function(){
        $this.setStrokeColor(this.value);
    });

    /* Changes fill color value */
    document.getElementById('fillColor')
      .addEventListener('change', function(){
        $this.setFillcolor(this.value);
    });

    /* Changes pencil color value */
    document.getElementById('pencilColor')
      .addEventListener('change', function(){
        $this.setFillcolor(this.value);
        $this.setStrokeColor(this.value);
    });
};


/** Sets stroke width
 * @function
 * @param {Number} size - radius size
 */
CanvasClass.prototype.setStrokeWidth = function(size){
  this.radius = size ;
  this.context.lineWidth = this.radius * 2;
  var counter = document.getElementById('widthCount');
  counter.innerHTML = size;
};


/** Sets stroke color
 * @function
 * @param {String} color - Stroke color
 */
CanvasClass.prototype.setStrokeColor = function(color){
  this.context.strokeStyle = color;
};


/**Sets fill color
 * @function
 * @param {String} color - Fill color
 */
CanvasClass.prototype.setFillcolor = function(color){
  this.context.fillStyle = color;
};

/**Draws line on canvas
 * @function
 * @param {Object} e - Mouse event
 */
CanvasClass.prototype.drawLine = function(e){

  /* Pencil color fill and stroke color setup */
  var oldStroke = this.context.strokeStyle;
  var oldFill = this.context.fillStyle;
  var pencilColor = document.getElementById('pencilColor').value;
  this.setFillcolor(pencilColor);
  this.setStrokeColor(pencilColor);

  this.context.lineTo(e.offsetX, e.offsetY);
  this.context.stroke();
  this.context.beginPath();
  this.context.globalCompositeOperation="source-over";
  this.context.arc(e.offsetX, e.offsetY, this.radius, 0, Math.PI*2);
  this.context.fill();
  this.context.beginPath();
  this.context.moveTo(e.offsetX, e.offsetY);

  this.setFillcolor(oldFill);
  this.setStrokeColor(oldStroke);
};

/**Eraser method
 * @function
 * @param {Object} e - Mouse event
 */
CanvasClass.prototype.eraseStuff = function(e){
  this.context.beginPath();
  this.context.globalCompositeOperation="destination-out";
  this.context.arc(e.offsetX, e.offsetY,this.radius *5,Math.PI*2,false);
  this.context.fill();
};

/**Save method
 * @function
 */
CanvasClass.prototype.saveDrawing = function(){
  var data = this.canvas.toDataURL("image/png");
  var link = document.getElementById('saveBtn');
  link.setAttribute('download', 'MyCanvasDrawing.png');
  link.setAttribute('href', data.replace("image/png", "image/octet-stream"));
};

/**Draw circle method
 * @function
 * @param {Object} e - Mouse event
 */
CanvasClass.prototype.drawCircle = function(e){
  var oldLineWidth = this.context.lineWidth;
  this.context.beginPath();
  this.context.globalCompositeOperation="source-over";
  this.context.arc(e.offsetX, e.offsetY, this.shapeSize - 50, 0, Math.PI*2);
  this.context.fill();
  this.context.lineWidth = 5;
  this.context.stroke();
  this.context.beginPath();
  this.context.lineWidth = oldLineWidth;
};

/**Draw rectangle method
 * @function
 * @param {Object} e - Mouse event
 */
CanvasClass.prototype.drawRectangle = function(e){
  var oldLineWidth = this.context.lineWidth;
  this.context.beginPath();
  this.context.globalCompositeOperation="source-over";
  this.context.rect(e.offsetX - 50, e.offsetY - 50, this.shapeSize + 70, this.shapeSize);
  this.context.fill();
  this.context.lineWidth = 5;
  this.context.stroke();
  this.context.beginPath();
  this.context.lineWidth = oldLineWidth;
};

/**Draw triangle method
 * @function
 * @param {Object} e - Mouse event
 */
CanvasClass.prototype.drawTriangle = function(e){
  var oldLineWidth = this.context.lineWidth;
  var height = this.shapeSize * (Math.sqrt(3)/2);
  var X = e.offsetX - 15;
  var Y = e.offsetY - 40;
  this.context.beginPath();
  this.context.globalCompositeOperation="source-over";
  this.context.moveTo(X, Y);
  this.context.lineTo(X+50, Y+height);
  this.context.lineTo(X-50, Y+height);
  this.context.lineTo(X, Y);
  this.context.fill();
  this.context.closePath();
  this.context.lineWidth = 5;
  this.context.stroke();
  this.context.beginPath();
  this.context.lineWidth = oldLineWidth;
};

/**Tweet Drawing method 
 * @function
 * @param {Object} e - Mouse event
 */
CanvasClass.prototype.tweetDrawing = function(){
  document.getElementById('shareBtn')
      .setAttribute('href',
        "https://twitter.com/intent/tweet?text=STUFF DOESN'T WORT AT THE MOMENT");
}
