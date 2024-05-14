import { Item } from "./Item";
import { ItemInventario } from "./ItemInventario";

export class Inventario {
    private itensInventario:ItemInventario [] = []
    private quantmaxitens:number;

    getItemInventario(): ItemInventario[]{
        return this.itensInventario
    }
    getquantmaxitens(){
        return this.quantmaxitens
    }
    setItemInventario(ItemInv:ItemInventario[]){
        this.itensInventario = ItemInv
    }
    setquantmaxitens(qti:number){
        this.quantmaxitens = qti
    }

    adicionarItem(item:Item, quantidade:number){
        if(quantidade > this.quantmaxitens){
            try{
            }catch(InventarioLimiteException){
            console.error('Inventário está cheio:', InventarioLimiteException);
            break
            }
            finally {
                console.log('Finalizando...')
            }
            }
        }
        const existingItem = this.itensInventario.find(i => i.getItem.name === getItem.nome);
        if (existingItem) {
            existingItem.quantidade += getItem.quantidade;
        } else {
            this.itens.push(item);
        }
       
        
            
    
        this.itensInventario.push(new ItemInventario(item, 0))
    }


}