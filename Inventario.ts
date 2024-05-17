import { InventarioLimiteException } from "./inventariocheio";
import { Item } from "./Item";
import { ItemInventario } from "./ItemInventario";

export class Inventario {
    private itens:ItemInventario [] = []
    private quantmaxitens:number;

    constructor(quantidadeMaximaItens: number) {
        this.quantmaxitens = quantidadeMaximaItens;
        this.itens = []
    }

    getItemInventario(): ItemInventario[]{
        return this.itens
    }
    getquantmaxitens(){
        return this.quantmaxitens
    }
    setItemInventario(ItemInv:ItemInventario[]){
        this.itens = ItemInv
    }
    setquantmaxitens(qti:number){
        this.quantmaxitens = qti
    }
    getQuantidadeTotal(): number {
        let total = 0;
        for (const itemInventario of this.itens) {
            total += itemInventario.getQuantidade();
        }
        return total;
    }

    adicionarItem(item:Item, quantidade:number = 1){
        if (this.itens.length >= this.quantmaxitens) {
            throw new InventarioLimiteException("Inventário cheio. Não é possível adicionar mais itens.");
        }
       
        const itemExistente = this.itens.findIndex((itemInventario) => itemInventario.getItem() === item)
        if (itemExistente !== -1) {
            this.itens[itemExistente].setQuantidade(quantidade);
        } else {
            this.itens.push(new ItemInventario(item, quantidade));
        }
    }
    removerItem(item: Item) {
        const index = this.itens.findIndex(itemInv => itemInv.getItem() === item);
        if (index !== -1) {
            this.itens.splice(index, 1);
        }
    }


}