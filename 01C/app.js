class App
{
    runApplication()
    {
        this.greeting="Starting.up";
        console.log("hello world!");
        
        this.appNaam = "opdracht";
        this.versienummer = "0.9";
        this.versiedatum = "21 november 2023";
        this.autheur = "Julnar Kreidi";
        this.copyright = "Niks";
        this.distributeur = "Google";
        this.darkmode = "false";

        let nummer = 10
        console.log(nummer)
        let naam = "Rawr"
        console.log(naam)
        let bool=false
        console.log(bool)

        this.eenBool=true
        this.nummer=2
        this.naam="Kat" 
        
    }
}

let app = new App();
app.runApplication();

console.log(app.greeting);
console.log("appNaam:" + app.appNaam);
console.log("versienummer:" + app.versienummer)
console.log("versiedatum:" + app.versiedatum);
console.log("autheur:" + app.autheur)
console.log("copyright:" + app.copyright);
console.log("distributeur:" + app.distributeur)
console.log("darkmode:" + app.darkmode);

console.log("eenBool:" + app.eenBool);
console.log("nummer:" + app.nummer);
console.log("naam:" + app.naam);


