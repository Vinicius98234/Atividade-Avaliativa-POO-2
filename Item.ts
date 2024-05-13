export abstract class Item {
    protected nome:string;
    protected descricao:string;

    constructor(n:string, d:string){
        n = this.nome
        d = this.descricao
    }

    abstract aplicarBeneficios(Personagem):void;
    abstract removerBeneficios(Personagem):void;
}