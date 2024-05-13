import { Item } from "./Item";

export class Arma extends Item{
    aplicarBeneficios(personagem):void{
        personagem.forca += 10;
        personagem.defesa += 5;
    }
    removerBeneficios(personagem):void{

    }

}