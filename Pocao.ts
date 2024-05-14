import { Item } from "./Item";

export class Pocao extends Item{
    aplicarBeneficios(personagem):void{
        personagem.hp += personagem.hp * 0,5
        personagem.mp += personagem.mp * 0,2   
    }
    removerBeneficios(personagem):void{}

}