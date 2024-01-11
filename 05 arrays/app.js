class App {
    runApplication() {
        console.log("hello world!")

        let array1 = ["eminem", "Mf", "Travis"];
        console.log(array1);
        for (let i = 0; i < array1.length; i++) {
            const element = array1[i];
            console.log(i + ": " + element);
        }
        array1.push("bob dylan", "prince")
        for (let i = 0; i < array1.length; i++) {
            const element = array1[i];
            console.log(i + ": " + element);
        }

        let array = ["eminem", "Mf", "Travis"];
        array.push("bob dylan", "prince")
        let indexToRemove = array.indexOf("bob dylan")
        array.splice(indexToRemove, 2)
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i + ": " + element);
        }
        array.push("Olivia", "ED")
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i + ": " + element);
        }

        let nummers = [2, 5, 7];
        console.log(nummers);
        for (let i = 0; i < nummers.length; i++) {
            const element = nummers[i];
            var optellen = element + (1)
            console.log(optellen)
        }
    }
}

let app = new App();
app.runApplication();