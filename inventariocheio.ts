export class InventarioLimiteException extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = "InventarioLimiteException";
    }
}