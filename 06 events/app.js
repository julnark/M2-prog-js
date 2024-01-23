class App
{
    runApplication()
    {
        console.log("hello world!");
        let uiButton = document.getElementById('clickable');
        let click = document.getElementById('click');
        let Clickclick = document.getElementById('ClickClick');
        uiButton.addEventListener("click", (e)=>{
            const para = document.createElement("p");
            const node = document.createTextNode("This is new.");
            para.appendChild(node);
            document.body.appendChild(para);
        });

        click.addEventListener("click", (e)=>{
            const grote = document.createElement("h1")
            const tekstGrote = document.createTextNode("It's a RACCOON!")
            grote.appendChild(tekstGrote);
            document.body.appendChild(grote);
        });

        Clickclick.addEventListener("click", (e)=>{
            var x = document.createElement("IMG");
            x.setAttribute("src", "raccoon.png");
            x.setAttribute("width", "304");
            x.setAttribute("height", "228");
            x.setAttribute("alt", "Raccoon");
            document.body.appendChild(x);
        })

        tekst.addEventListener("click", (e)=>{
            const colour = tekst.style.backgroundColor;
            if (colour == 'red'){
                tekst.style.backgroundColor= "white"
            }
            else {
                const grote = document.createElement("h1")
                const tekstGrote = document.createTextNode("U Clicked a div")
                grote.appendChild(tekstGrote);
                document.body.appendChild(grote);
                tekst.style.backgroundColor= "red"
            }
        })
    }
}

let app = new App();
app.runApplication();

