
import { ItemMenu } from "./ItemMenu";




export class Menu {
    private itensMenu: ItemMenu[];
    

    constructor() {
        this.itensMenu = [];
        
    }

    addItem(opcao:string, textoOpcao:string): void {
        this.itensMenu.push(new ItemMenu(opcao, textoOpcao));
    }

    imprimirMenu(): string {
        console.log("Opções do Menu:");
        this.itensMenu.forEach(item => {console.log(`${item.getOpcao()}: ${item.getTextoOpcao()}`);
        });

        
        return ""
    }
    
    

    

}

    
    
    

