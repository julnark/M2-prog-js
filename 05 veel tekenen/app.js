class App {

    runApplication() {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        console.log(this.tekenCirkel)
        this.tekenCirkel(g);
        for (let i = 0; i < 200; i++) {
            let x = Math.random() * 800;
            let y = Math.random() * 600;
            this.tekenCirkel(g, x, y);
        }
    }

    tekenCirkel(g, x, y) {
        g.fillStyle = "#7FrFD4";
        g.beginPath();
        g.arc(x, y, 20, 0, Math.PI * 2);
        g.stroke();
        g.fill();
        g.closePath();
    }
}

let app = new App();
app.runApplication();