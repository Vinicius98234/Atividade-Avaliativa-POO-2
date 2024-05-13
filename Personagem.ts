import { Inventario } from "./Inventario";

export class Personagem{
    private nome:string;
    private hp:number;
    private mp:number;
    private forca:number;
    private defesa:number;
    private inventario:Inventario[] = []
    private arma:string;
    
    getNome():string{
        return this.nome
    }
    setNome(n:string){
        this.nome = n
    }
    getHP():number {
        return this.hp
    }
    setHP(hp:number){
        this.hp = hp
    }
    getMP():number {
        return this.mp
    }
    setMP(mp:number){
        this.mp = mp
    }
    getForca():number{
        return this.forca
    }
    setForca(frc:number){
        this.forca = frc
    }
    getDefesa():number{
        return this.defesa
    }
    setDefesa(def:number){
        this.defesa = def
    }
    getInventario():Inventario[] {
        return this.inventario
    }
    setInventario(inv:Inventario[]){
        this.inventario = inv
    }
    getArma ():string{
        return this.arma
    }
    setArma(arm:string){
        this.arma = arm
    }
}