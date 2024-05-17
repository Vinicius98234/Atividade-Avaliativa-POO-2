import { Personagem } from "./Personagem";

export abstract class Item {
    protected nome:string;
    protected descricao:string;

    constructor(n:string, d:string){
        this.nome = n
        this.descricao = d
    }
    getNome():string{
        return this.nome
    }
    setNome(nmi:string){
        this.nome = nmi
    }
    getDescricao():string{
        return this.descricao
    }
    setDescricao(dc:string){
        this.descricao = dc
    }
    abstract aplicarBeneficios(personagem :Personagem):void;
    abstract removerBeneficios(personagem :Personagem):void;
}