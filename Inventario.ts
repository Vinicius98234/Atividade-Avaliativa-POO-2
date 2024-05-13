import { Item } from "./Item";
import { ItemInventario } from "./ItemInventario";

export class Inventario {
    private itemInventario:ItemInventario [] = []
    private quantmaxitens:number;

    getItemInventario(): ItemInventario[]{
        return this.itemInventario
    }
    getquantmaxitens(){
        return this.quantmaxitens
    }
    setItemInventario(ItemInv:ItemInventario[]){
        this.itemInventario = ItemInv
    }
    setquantmaxitens(qti:number){
        this.quantmaxitens = qti
    }

    adicionarItem(item, itemInventario){
        item.n.d += ItemInventario
    }


}