import {Dino} from "./dino.mjs"
import {Plant} from "./plant.mjs"


export function MaakDino(){
    return new Dino("gemaakte Modulosaurus");
}

export function MaakPlant(){
    return new Plant ("gemaakte ModuloBloem");
}