function argumentsAreHandy(shoutout){
    console.log("do you want to give a shoutout?");
    console.log(shoutout);
}
argumentsAreHandy("Super Shout out");
argumentsAreHandy("Super duper");
argumentsAreHandy("Super mooi");

function superMooieGlobalFunction(){
    console.log("ik ben globaal");
    console.log("dus je mag mij overall aanroepen");
}
superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();

class App
{
    runApplication()
    {
        console.log("hello world!");
    }
}

let app = new App();
app.runApplication();

