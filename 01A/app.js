class App
{
    runApplication()
    {
        console.log("hello world!");
        
        let appNaam = "opdracht";
        let versienummer = "0.9";
        let versiedatum = "21 november 2023";
        let autheur = "Julnar Kreidi";
        let copyright = "Niks";
        let distributeur = "Google";
        let darkmode = "false";

        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();

