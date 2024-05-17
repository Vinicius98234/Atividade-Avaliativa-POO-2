import { Item } from "./Item";
import { Personagem } from "./Personagem";

export class Arma extends Item{
    constructor(nome:string, descricao:string){
        super(nome,descricao)
    }
    aplicarBeneficios(personagem : Personagem):void{
        personagem.aumentarAtaque(10);
        personagem.aumentarDefesa(5);
    }
    removerBeneficios(personagem : Personagem):void{
        personagem.diminuirAtaque(10);
        personagem.diminuirDefesa(5);

    }

}