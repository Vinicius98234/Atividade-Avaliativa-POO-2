import { Arma } from "./Arma";
import { Inventario } from "./Inventario";
import { Menu } from "./Menu";
import { Personagem } from "./Personagem";
import { Pocao } from "./Pocao";


export class Jogar {
    private menu: Menu;
    private personagem: Personagem;

    constructor() {
        this.menu = new Menu();
        this.personagem = new Personagem("Praxedes", 20, 10, 10, 10, new Inventario(200), new Arma("Mjölnir", "Na religião nórdica, é o martelo do deus Thor"));
        this.novoMenu();
    }

    private novoMenu(){
        this.menu.addItem('1', 'Equipar Arma');
        this.menu.addItem('2', 'Tomar Poção');
        this.menu.addItem('3', 'Adicionar Arma ao Inventário');
        this.menu.addItem('4', 'Adicionar Poção ao Inventário');
        this.menu.addItem('5', 'Imprimir Info');
        this.menu.addItem('6', 'Desequipar Arma');
        this.menu.addItem('0', 'Sair');
    }

    jogar(){
        let opcaoSelecionada = '';
        while (opcaoSelecionada !== '0') {
            this.menu.imprimirMenu();
            opcaoSelecionada = this.opcaoDoUsuario();
            this.rodarOpcaoSelcionada(opcaoSelecionada);
        }
    }

    private opcaoDoUsuario():string{
        let entrada = require('prompt-sync')();
        return entrada('Digite a sua opção:').trim()
    }
    
    private rodarOpcaoSelcionada(opcao: string) {
        if (opcao === '1') {
            this.equiparArma();
        } else if (opcao === '2') {
            this.tomarPocao();
        } else if (opcao === '3') {
            this.adicionarArmaAoInventario();
        } else if (opcao === '4') {
            this.adicionarPocaoAoInventario();
        } else if (opcao === '5') {
            console.log(this.personagem.exibirInformacoes());
        } else if (opcao === '6') {
            this.personagem.desequiparArma();
        } else if (opcao === '0') {
            console.log('Saindo da aplicação...');
        } else {
            console.log('Opção inválida. Por favor, escolha uma opção válida.');
        }
       
    }

   
    private adicionarArmaAoInventario() {
        const entrada = require('prompt-sync')();
        const nomeArma = entrada('Digite o nome da arma: ');
        const descricaoArma = entrada('Digite a descrição da arma: ');
        const quantidade = parseInt(entrada('Digite a quantidade de armas: '));
    
        const arma = new Arma(nomeArma, descricaoArma);
        try {
            this.personagem.getInventario().adicionarItem(arma, quantidade);
            console.log(`${quantidade} ${nomeArma}(s) adicionado(s) ao inventário.`);
        } catch (error) {
            console.log(error.message);
        }
    }
    
    private adicionarPocaoAoInventario() {
        const entrada = require('prompt-sync')();
        const nomePocao = entrada('Digite o nome da poção: ');
        const descricaoPocao = entrada('Digite a descrição da poção: ');
        const quantidade = parseInt(entrada('Digite a quantidade de poções: '));
    
        const pocao = new Pocao(nomePocao, descricaoPocao);
        try {
            this.personagem.getInventario().adicionarItem(pocao, quantidade);
            console.log(`${quantidade} ${nomePocao}(s) adicionado(s) ao inventário.`);
        } catch (error) {
            console.log(error.message);
        }
    }
    private equiparArma() {
        const inventario = this.personagem.getInventario();
        const armas = inventario.getItemInventario().filter(item => item.getItem() instanceof Arma);
    
        if (armas.length === 0) {
            console.log("Não há armas no inventário.");
            return;
        }
    
        console.log("Armamento disponível:");
        armas.forEach((item, index) => {
            console.log(`${index + 1}. ${item.getItem().getNome()} (${item.getQuantidade()})`);
        });
    
        const entrada = require('prompt-sync')();
        const indiceArma = parseInt(entrada('Escolha o número correspondente à arma que deseja equipar: ')) - 1;
    
        if (isNaN(indiceArma) || indiceArma < 0 || indiceArma >= armas.length) {
            console.log("Opção inválida.");
            return;
        }
    
        const armaSelecionada = armas[indiceArma].getItem();
        this.personagem.usarItem(armaSelecionada);
        if (armaSelecionada instanceof Arma) { 
            this.personagem.usarItem(armaSelecionada);
            console.log(`Você equipou a arma ${armaSelecionada.getNome()}.`);
        } else {
            console.log("Opção inválida.");
        }
    }
    
    private tomarPocao() {
        const inventario = this.personagem.getInventario();
        const pocoes = inventario.getItemInventario().filter(item => item.getItem() instanceof Pocao);
    
        if (pocoes.length === 0) {
            console.log("Não há poções no inventário.");
            return;
        }
    
        console.log("Poções disponíveis:");
        pocoes.forEach((item, index) => {
            console.log(`${index + 1}. ${item.getItem().getNome()} (${item.getQuantidade()})`);
        });
    
        const entrada = require('prompt-sync')();
        const indicePocao = parseInt(entrada('Escolha o número correspondente à poção que deseja usar: ')) - 1;
    
        if (isNaN(indicePocao) || indicePocao < 0 || indicePocao >= pocoes.length) {
            console.log("Opção inválida.");
            return;
        }
    
        const pocaoSelecionada = pocoes[indicePocao].getItem();
        this.personagem.usarItem(pocaoSelecionada);
        console.log(`Você usou a poção ${pocaoSelecionada.getNome()}.`);
    }
    
}
const app = new Jogar();
app.jogar();