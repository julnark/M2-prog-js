class App {
    runApplication() {
        console.log("hello world!");

        let dino = new Dino("Brachiosaurus", true, 20);
        console.log(dino)
        console.log("de leeftijd van deze " + dino.naam + "is:" + dino.leeftijd);
        console.log("en deze " + dino.naam + "eet vlees" + dino.vleeseter);
    }
}

class Dino {
    constructor(naam, vleeseter, leeftijd) {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd
    }
}

let app = new App();
app.runApplication();

