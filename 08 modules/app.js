class App
{
    runApplication()
    {
        console.log("hello world!");
    }
}

let app = new App();
app.runApplication();

import {Dino} from "./dino.mjs"
let dino = new Dino("Modulosaurus")
console.log(dino.naam);

import {Plant} from "./plant.mjs"
let plant = new Plant("ModuloBloem")
console.log(plant.naam);

