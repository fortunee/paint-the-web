class Paint {
    constructor(canvas) {
        this.canvas = canvas;
        this.radius = 10;
        this.shapeSize = 100;
        this.context = this.canvas.getContext('2d');
        this.context.lineWidth = this.radius * 2;
        this.drawMode = 'pencil';
    }

    setStrokeWidth(size) {
        this.radius = size;
        this.context.lineWidth = this.radius * 2;
        const counter = document.getElementById('widthCount');
        counter.innerHTML = size;
    }

    setStrokeColor(color) {
        this.context.strokeStyle = color;
    }

    setFillColor(color) {
        this.context.fillStyle = color;
    }

    initStrokeWidth() {
        const strokeRadius = document.getElementById('strokeRadius').value;
        this.setStrokeWidth(strokeRadius);
    }

    lineDraw(e) {
        const currentStroke = this.context.strokeStyle;
        const currentFill = this.context.fillStyle;
        const pencilColor = document.getElementById('pencilColor').value;

        this.setFillColor(pencilColor);
        this.setStrokeColor(pencilColor);

        this.context.lineTo(e.offsetX, e.offsetY);
        this.context.stroke();
        this.context.beginPath();
        this.context.globalCompositeOperation = 'source-over';
        this.context.arc(e.offsetX, e.offsetY, this.radius, 0, Math.PI*2);
        this.context.fill();
        this.context.beginPath();
        this.context.moveTo(e.offsetX, e.offsetY);

        this.setFillColor(currentFill);
        this.setStrokeColor(currentStroke);
    }

    // drawModeChange() {
    //     const drawingTools = document.querySelectorAll('.drawingTool');

    //     drawingTools.forEach((tool) => {
            
    //     })
    // }
}