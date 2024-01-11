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

        let headersByCssClass = document.getElementsByClassName("bandName");
        console.log(headersByCssClass);
        for (let i = 0; i < headersByCssClass.length; i++) {
            const element = headersByCssClass[i];
            console.log(element);
        }

        let mijnH1 = document.getElementById("headerId")
        console.log(mijnH1.innerText);// geef weer wat de text is van mijnH1
        for (let i = 0; i < headersByCssClass.length; i++) {
            const element = headersByCssClass[i];
            console.log(element.innerText);
        }

        mijnH1.innerText = "Nieuwe text";// stop een nieuwe text in de html
        for (let i = 0; i < headersByCssClass.length; i++) {
            const element = headersByCssClass[i];
            console.log(element.innerText)
        }

        headersByCssClass[0].innerText = "nieuws ";
        headersByCssClass[1].innerText = "reviews";
        headersByCssClass[2].innerText = "commentaar ";
        headersByCssClass[3].innerText = "beste forum posts ";
        headersByCssClass[4].innerText = "pricewatch";
        
    }
}

let app = new App();
app.runApplication();