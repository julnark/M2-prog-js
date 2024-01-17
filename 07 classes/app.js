class App
{
    runApplication()
    {
        console.log("hello world!");
    }
}

class Greet{
    constructor()
    {
        this.greeting = "Greetings!!";
    }

    showGreeting(){
        console.log("greeting van binnen: " +this.greeting);
    }
}

class GoodBye{
    constructor()
    {
        this.bye = "ByeBye!!";
    }

    showBye(){
        console.log("ByeBye van binnen: " +this.bye);
    }
}

let app = new App();
app.runApplication();

let greet = new Greet();
let bye = new GoodBye();

greet.showGreeting();
bye.showBye();

greet.showGreeting();
bye.showBye();

greet.showGreeting();
bye.showBye();

console.log("greeting van buiten:" +greet.greeting);
console.log("ByeBye van buiten:" +bye.bye);