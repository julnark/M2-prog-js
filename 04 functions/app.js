/*
function Wiskunde(u,h,l){
    let logY = Math.log(l) + h + Math.pow(u,2);
    return logY;
}
let y4 = Wiskunde(9,8,15);
console.log(y4);

function ax2bcWiskunde(x,a,b,c){
    let y = (a*(x*x)) + (b*x) +c;
    return y;
}
let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);

function heeftEenResultaat(){
    let resultaat = 1;
    return resultaat;
}
let hetResultaat = heeftEenResultaat();
    console.log(hetResultaat);
    console.log(heeftEenResultaat());

let x =9;
let a = 3;
let b = 4;
let c = 89;

let y =(a*(x*x)) + (b*x) +c;
console.log(y);

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
*/


class App {
    runApplication() {
        console.log("hello world!");
    }
    newClassFunction() {
        console.log("hello world in de nieuwClassFunction");
    }
    anotherFunctionWithArguments(aArgument) {
        console.log("Kom maar met je argument");
        console.log("hier:");
        console.log(aArgument);
    }
    kart() {
        console.log("MARIO!!");
    }
    haha() {
        let antwoord = "BWAHAHA!!"
        return antwoord;
    }
    rekenen(a, b) {
        let c = parseInt(a) + parseInt(b);
        return c;
    }
    keer(g, h) {
        let f = g * h;
        return f;
    }

}

let app = new App();
app.runApplication();
app.newClassFunction();
app.anotherFunctionWithArguments("Mijn argument is appel");
app.kart();
let res = app.haha();
console.log(app.haha());
let c = app.rekenen(6, 4);
console.log(c);
let f = app.keer(10, 8);
console.log(f)



