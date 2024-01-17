class App
{
    runApplication()
    {
        console.log("hello world!");

        let user1 = new User ("Jul")
        let user2 = new User ("Miel")
        let user3 = new User ("Lim")
        let user4 = new User ("Cheno")
        let user5 = new User ("Zyaar")
        let user6 = new User ("Loo")

        user1.wieBenIk(); //jul
        user2.wieBenIk(); //miel
        user3.wieBenIk(); //lim 
        user4.wieBenIk(); //cheno
        user5.wieBenIk(); //zyaar 
        user6.wieBenIk(); //loo
    }
}

class User{
    constructor(name){
        this.name = name;
    }
    wieBenIk(){
        console.log(this.name);
    }
}

let app = new App();
app.runApplication();

