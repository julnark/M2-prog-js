class App
{
    runApplication()
    {
        console.log("hello world!");
    }
}

class Greet{
    constructor()
    {}

    showGreeting(){
        console.log("Greetings!!!!");
    }
}

class GoodBye{
    constructor()
    {}

    showBye(){
        console.log("ByeBye!!!!");
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