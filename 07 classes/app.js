class App
{
    runApplication()
    {
        console.log("hello world!");
    }
}

class Greet{
    constructor(){
        console.log("Greetings!!!!");
    }
}

class GoodBye{
    constructor(){
        console.log("ByeBye!!!!");
    }
}

let app = new App();
app.runApplication();
let greet = new Greet();
new Greet();
new Greet();
new Greet();
let bye = new GoodBye();