export abstract class Item {
    protected nome:string;
    protected descricao:string;

    constructor(n:string, d:string){
        n = this.nome
        d = this.descricao
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
    abstract aplicarBeneficios(Personagem):void;
    abstract removerBeneficios(Personagem):void;
}