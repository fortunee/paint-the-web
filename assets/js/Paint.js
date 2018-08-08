class Paint {
    constructor(canvas) {
        this.canvas = canvas;
        this.radius = 10;
        this.shapeSize = 100;
        this.context = this.canvas.getContext('2d');
        this.context.lineWidth = this.radius * 2;
        this.drawMode = 'pencil';
    }

    initStrokeWidth() {
        const strokeRadius = document.getElementById('strokeRadius').value;
        this.setStrokeWidth(strokeRadius);
    }
}