class App
{
    runApplication()
    {
        console.log("hello world");

        let title = document.getElementById("newtitle")
        console.log(title);

        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            title.style.backgroundColor = "#CD5C5C"
        }
        let newsitem1 = document.getElementsByClassName("gamenews")[0];
        console.log(newsitem1);
        if(random < 0.2)
        {
            newsitem1.style.backgroundColor = "#FFFFE0"
        }

        let newsitem2 = document.getElementsByClassName("gamenews")[1];
        console.log(newsitem2);
        if(random < 0.2)
        {
            newsitem2.style.backgroundColor = "#E0FFFF"
        }
    }
}

let app = new App();
app.runApplication();