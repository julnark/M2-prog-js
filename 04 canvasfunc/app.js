class App {
    runApplication() {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        this.tekenHuis(g,400,200);
        this.tekenHuis(g,100,10);
        this.tekenHuis(g,500,600);

    }
    tekenHuis(g,x,y) {
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(600+x, 400+y);
        g.lineTo(800+x, 300+y);
        g.lineTo(700+x, 200+y);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(300+x, 100+y);
        g.lineTo(200+x, 300+y);
        g.lineTo(600+x, 400+y);
        g.lineTo(700+x, 200+y);
        g.closePath();
        g.stroke();
        g.fill()


        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(600+x, 400+y);
        g.lineTo(600+x, 600+y);
        g.lineTo(200+x, 500+y);
        g.lineTo(200+x, 300+y);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(600+x, 400+y);
        g.lineTo(800+x, 300+y);
        g.lineTo(800+x, 500+y);
        g.lineTo(600+x, 600+y);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "yellow";
        g.moveTo(400+x, 450+y);
        g.lineTo(400+x, 400+y);
        g.lineTo(300+x, 400+y);
        g.lineTo(300+x, 450+y);
        g.closePath();
        g.stroke();
        g.fill()
    }
}

let app = new App();
app.runApplication();






