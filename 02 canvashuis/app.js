class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas=document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.fillStyle = "#FFC0CB";
        g.fillRect(0,0,canvas.width,canvas.height);
        g.fillStyle= "#00CED1";
        g.fillRect(400,100,10,10);
        console.log(canvas)
    }
}

let app = new App();
app.runApplication();




