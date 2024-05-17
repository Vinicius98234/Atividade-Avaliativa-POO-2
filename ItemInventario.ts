import { Item } from "./Item";

export class ItemInventario{
    private quantidade:number;
    private item:Item;

    constructor(item:Item,quantidade:number){
        this.quantidade = quantidade
        this.item = item
        
    }

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