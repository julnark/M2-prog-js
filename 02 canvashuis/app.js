class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas=document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10);
        g.fillStyle = "red";
        g.fillRect(0,0,canvas.width,canvas.height);
        console.log(canvas)
    }
}

let app = new App();
app.runApplication();




