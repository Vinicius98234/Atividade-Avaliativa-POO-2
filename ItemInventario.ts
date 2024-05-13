import { Item } from "./Item";

export class ItemInventario{
    private quantidade:number;
    private item:Item;

    getQuantidade(): number{
        return this.quantidade
    }
    setQuantidade(q:number){
        this.quantidade = q;
    }
    getItem():Item{
        return this.item
    }
    setItem(it:Item){
        this.item = it
    }
}