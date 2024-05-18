import { Arma } from "./Arma";
import { Inventario } from "./Inventario";
import { Item } from "./Item";
import { ItemInventario } from "./ItemInventario";
import { Pocao } from "./Pocao";

export class Personagem{
    private nome:string;
    private hp:number;
    private mp:number;
    private forca:number;
    private defesa:number;
    private inventario:Inventario;
    private arma:Arma;
    
    constructor(nome: string, HP: number, MP: number, forca: number, defesa: number,inventario:Inventario, arma:Arma) {
        this.nome = nome;
        this.hp = HP;
        this.mp = MP;   
        this.forca = forca;
        this.defesa = defesa;
        this.inventario = inventario;
        this.arma = arma
    }
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
    getInventario():Inventario {
        return this.inventario
    }
    setInventario(inv:Inventario){
        this.inventario = inv
    }
    getArma ():Arma{
        return this.arma
    }
    setArma(arm:Arma){
        this.arma = arm
    }
    aumentarAtaque(valor: number) {
        this.forca += valor;
    }

    diminuirAtaque(valor: number) {
        this.forca -= valor;
    }

    aumentarDefesa(valor: number) {
        this.defesa += valor;
    }

    diminuirDefesa(valor: number) {
        this.defesa -= valor;
    }

    getMaxHP(valor: number) {
        this.hp *= valor
    }

    getMaxMP(valor: number) {
        this.hp *= valor
    }

    abrirInventario() {
        console.log("Inventário:");
        this.inventario.getItemInventario().forEach((itemInventario, index) => {
            const item = itemInventario.getItem();
            console.log(`${index + 1} - ${itemInventario.getItem().getNome()} (${itemInventario.getQuantidade()})`);
        });
        console.log(`Total: ${this.inventario.getQuantidadeTotal()}/${this.inventario.getquantmaxitens()}`);
    }
    usarItem(item: Item): void {
        if (item instanceof Arma) {
            if (this.arma) {
                this.arma.removerBeneficios(this);
            }
            this.arma = item;
            this.arma.aplicarBeneficios(this);
        } else if (item instanceof Pocao) {
            item.aplicarBeneficios(this);

            for (let i = 0; i < this.inventario.getItemInventario().length; i++) {

                if (this.inventario.getItemInventario()[i].getItem().getNome() == item.getNome()) {
                    this.inventario.getItemInventario()[i].setQuantidade(this.inventario.getItemInventario()[i].getQuantidade() - 1);
                }

            }
        }    
    }
    exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`HP: ${this.hp}`);
        console.log(`MP: ${this.mp}`);
        console.log(`Força: ${this.forca}`);
        console.log(`Defesa: ${this.defesa}`);
        console.log(`Arma: ${this.arma ? this.arma.getNome() : "Nenhuma"}`);
        console.log(`Inventário: `)
        this.inventario.getItemInventario().forEach((item,index) => {
            console.log(`${index + 1} - ${item.getItem().getNome()} (${item.getQuantidade()})`)
        })
        console.log(`Total de itens: ${this.inventario.getQuantidadeTotal()}`)
        console.log(`Limite de itens no inventário: ${this.inventario.getquantmaxitens()}`)
    }

    desequiparArma(): void {
        if (this.arma) {
            this.arma.removerBeneficios(this);
        }
        else {
            console.log("O personagem não está equipado com uma arma.");
        }
    }
   

    
    }
