class App {
    tekenHuis(g, x, y) {
        g.beginPath();
        g.fillStyle = "Black";
        g.moveTo(600 + x, 400 + y);
        g.lineTo(800 + x, 300 + y);
        g.lineTo(700 + x, 200 + y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.moveTo(300 + x, 100 + y);
        g.lineTo(200 + x, 300 + y);
        g.lineTo(600 + x, 400 + y);
        g.lineTo(700 + x, 200 + y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(600 + x, 400 + y);
        g.lineTo(600 + x, 600 + y);
        g.lineTo(200 + x, 500 + y);
        g.lineTo(200 + x, 300 + y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(600 + x, 400 + y);
        g.lineTo(800 + x, 300 + y);
        g.lineTo(800 + x, 500 + y);
        g.lineTo(600 + x, 600 + y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "yellow";
        g.fillRect(300 + x, 395 + y, 100, 100);
        g.closePath();
        g.stroke();
        g.fill();
    }

    tekenKerstBoom(g, x, y){
        g.beginPath();
        g.fillStyle = "brown"
        g.fillRect(590 + x, 495 + y, 20, 50);
        g.closePath();
        g.stroke(); 
        g.fill();

        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(600 + x, 250 + y);
        g.lineTo(500 + x, 500 + y);
        g.lineTo(700 + x, 500 + y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "blue"
        g.arc(600 + x,350 + y,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle = "red"
        g.arc(630  + x ,400 + y ,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle = "yellow"
        g.arc(570 + x ,400 + y ,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        
        g.beginPath();
        g.fillStyle = "orange"
        g.arc(620 + x, 450 + y ,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        
        g.beginPath();
        g.fillStyle = "yellow"
        g.arc(600 + x ,250 + y ,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();



    }

    runApplication() {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        this.tekenHuis(g, 1500, 100); 
        this.tekenHuis(g, -200, 100); 
        this.tekenHuis(g, -100, 1500);
        this.tekenHuis(g, 1500, 1500);

        this.tekenKerstBoom(g, 200, 1500);
        this.tekenKerstBoom(g, 100, 300);
        this.tekenKerstBoom(g, 1000, 300);
        this.tekenKerstBoom(g, 1000, 1500);
    }
}

let app = new App();
app.runApplication();
