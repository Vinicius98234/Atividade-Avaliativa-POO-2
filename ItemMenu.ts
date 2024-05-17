export class ItemMenu {
    private opcao: string;
    private textoOpcao: string;

    constructor(opcao: string, textoOpcao: string) {
        this.opcao = opcao;
        this.textoOpcao = textoOpcao;
    }

    getOpcao(): string {
        return this.opcao;
    }
    setOpcao(o: string) {
        this.opcao = o
    }

    getTextoOpcao(): string {
        return this.textoOpcao;
    }
    setTextoOpcao(txtop:string){
        this.textoOpcao = txtop
    }
}