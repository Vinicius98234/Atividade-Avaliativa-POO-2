import { Item } from "./Item";
import { Personagem } from "./Personagem";
    
export class Pocao extends Item{
    constructor(nome: string, descricao: string) {
        super(nome, descricao);
    }
    aplicarBeneficios(personagem:Personagem):void{
        const hpAumentado = personagem.getMaxHP(0.5)
        const mpAumentado = personagem.getMaxMP(0.2)
    }
    removerBeneficios(personagem:Personagem):void{}

}