class App
{
    runApplication()
    {
        console.log("hello world!");
        let uiButton = document.getElementById('clickable');
        uiButton.addEventListener("click", (e)=>{
            console.log("click!")
        });
    }
}

let app = new App();
app.runApplication();

