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

    initStrokeWidth() {
        const strokeRadius = document.getElementById('strokeRadius').value;
        this.setStrokeWidth(strokeRadius);
    }


}