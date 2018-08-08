class Paint {
    constructor(canvas) {
        this.canvas = canvas;
        this.radius = 10;
        this.shapeSize = 100;
        this.context = this.canvas.getContext('2d');
        this.context.lineWidth = this.radius * 2;
        this.drawMode = 'Pencil';
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

    circleDraw(e) {
        const currentLineWidth = this.context.lineWidth;

        this.context.beginPath();
        this.context.globalCompositeOperation = 'source-over';
        this.context.arc(e.offsetX, e.offsetY, this.shapeSize - 50, 0, Math.PI*2);
        this.context.fill();
        this.context.lineWidth = 5;
        this.context.stroke();
        this.context.beginPath();
        this.context.lineWidth = currentLineWidth;
    }

    rectangleDraw(e) {
        const currentLineWidth = this.context.lineWidth;

        this.context.beginPath();
        this.context.globalCompositeOperation = 'source-over';
        this.context.arc(e.offsetX - 50, e.offsetY - 50, this.shapeSize - 70, this.shapeSize);
        this.context.fill();
        this.context.lineWidth = 5;
        this.context.stroke();
        this.context.beginPath();
        this.context.lineWidth = currentLineWidth;
    }

    triangleDraw(e) {
        const currentLineWidth = this.context.lineWidth;
        const height = this.shapeSize * (Math.sqrt(3)/2);
        const x = e.offsetX - 15;
        const y = e.offsetY - 40;

        this.context.beginPath();
        this.context.globalCompositeOperation = 'source-over';
        this.context.moveTo(x, y);
        this.context.lineTo(x + 50, y + height);
        this.context.lineTo(x - 50, y + height);
        this.context.lineTo(x, y);
        this.context.fill();
        this.context.closePath();
        this.context.lineWidth = 5;
        this.context.stroke();
        this.context.beginPath();
        this.context.lineWidth = currentLineWidth;
    }

    bindEventsToDrawingTools() {
        const drawingTools = document.querySelectorAll('.drawingTool');

        drawingTools.forEach((tool) => {
            tool.addEventListener('click', () => {
                this.drawMode = tool.getAttribute('data-title');
                const strokeColor = document.getElementById('strokeColor').value;
                const fillColor = document.getElementById('fillColor').value;
                
                this.setFillColor(fillColor);
                this.setStrokeColor(strokeColor);
            });
        });
    }

    bindEventsToDrawingSettings() {
        const pencilDraw = document.getElementById('pencilDraw');
        const pencilColor = document.getElementById('pencilColor');
        const strokeRadius = document.getElementById('strokeRadius')
        const strokeColor = document.getElementById('strokeColor');
        const fillColor = document.getElementById('fillColor');

        pencilDraw
            .addEventListener('click', () => {
                const pencilColorValue = pencilColor.value;
                this.drawMode = this.getAttribute('data-title');
                this.setFillColor(pencilColorValue);
                this.setStrokeColor(pencilColorValue);
            });

        strokeRadius
            .addEventListener('change', () => {
                const strokeWidth = document.getElementById('strokeRadius').value;
                this.setStrokeWidth(strokeWidth);
            });

        strokeColor
            .addEventListener('change', () => {
                const strokeColorValue = strokeColorValue.value;
                this.setStrokeColor(strokeColorValue);
            });

        fillColor
            .addEventListener('change', () => {
                const fillColorValue = fillColor.value;
                this.fillColorValue(fillColorValue);
            });

        pencilColor
            .addEventListener('change', () => {
                const pencilColorValue = pencilColor.value;
                this.setFillColor(pencilColorValue);
                this.setStrokeColor(pencilColorValue);
            });
    }

    eraseStuff (e) {
        this.context.beginPath();
        this.context.globalCompositeOperation = 'destination-out';
        this.context.arc(e.offsetX, e.offsetY, this.radius * 5, Math.PI * 2, false);
        this.context.fill();
    }

    saveDrawing (e) {
        const imageData = this.canvas.toDataUrl('image/png');
        const saveBtn = document.getElementById('saveBtn');

        saveBtn.setAttribute('download', 'MyCanvasDrawing.png');
        saveBtn.setAttribute('href', imageData.replace('image/png', 'image/octet-stream'));
    };

    tweetDrawing () {
        document.getElementById('shareBtn')
        .setAttribute('href',
            "https://twitter.com/intent/tweet?text=STUFF DOESN'T WORT AT THE MOMENT");
    }
}
