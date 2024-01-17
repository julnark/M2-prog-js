class App
{
    runApplication()
    {
        console.log("hello world!");
        let uiButton = document.getElementById('clickable');
        let localeFunction = function (e){
            console.log("Click!!")
        };
        uiButton.addEventListener("click", localeFunction)
    }
}

let app = new App();
app.runApplication();

