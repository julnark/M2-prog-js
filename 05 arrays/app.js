class App {
    runApplication() {
        console.log("hello world!");
        let Array = ["Eminem", "MF", "travis"]
        console.log(Array);
        for (let i = 0; i < Array.length; i++) {
            const element = Array[i]
            console.log(i + ": "+ element
            );
        }
        
        let nummers = [2, 5, 7]
        console.log(nummers);
        for (let i = 0; i < nummers.length; i++) {
            const element = nummers[i]
            var optellen = element + (1);
            console.log(optellen)
        }
        
    }
}

let app = new App();
app.runApplication();



