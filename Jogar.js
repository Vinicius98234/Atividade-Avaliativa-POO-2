"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogar = void 0;
var Arma_1 = require("./Arma");
var Inventario_1 = require("./Inventario");
var Menu_1 = require("./Menu");
var Personagem_1 = require("./Personagem");
var Pocao_1 = require("./Pocao");
var Jogar = /** @class */ (function () {
    function Jogar() {
        this.menu = new Menu_1.Menu();
        this.personagem = new Personagem_1.Personagem("Praxedes", 20, 10, 10, 10, new Inventario_1.Inventario(200), new Arma_1.Arma("Mjölnir", "Na religião nórdica, é o martelo do deus Thor"));
        this.novoMenu();
    }
    Jogar.prototype.novoMenu = function () {
        this.menu.addItem('1', 'Equipar Arma');
        this.menu.addItem('2', 'Tomar Poção');
        this.menu.addItem('3', 'Adicionar Arma ao Inventário');
        this.menu.addItem('4', 'Adicionar Poção ao Inventário');
        this.menu.addItem('5', 'Imprimir Info');
        this.menu.addItem('6', 'Desequipar Arma');
        this.menu.addItem('0', 'Sair');
    };
    Jogar.prototype.jogar = function () {
        var opcaoSelecionada = '';
        while (opcaoSelecionada !== '0') {
            this.menu.imprimirMenu();
            opcaoSelecionada = this.opcaoDoUsuario();
            this.rodarOpcaoSelcionada(opcaoSelecionada);
        }
    };
    Jogar.prototype.opcaoDoUsuario = function () {
        var entrada = require('prompt-sync')();
        return entrada('Digite a sua opção:').trim();
    };
    Jogar.prototype.rodarOpcaoSelcionada = function (opcao) {
        if (opcao === '1') {
            this.equiparArma();
        }
        else if (opcao === '2') {
            this.tomarPocao();
        }
        else if (opcao === '3') {
            this.adicionarArmaAoInventario();
        }
        else if (opcao === '4') {
            this.adicionarPocaoAoInventario();
        }
        else if (opcao === '5') {
            console.log(this.personagem.exibirInformacoes());
        }
        else if (opcao === '6') {
            this.personagem.desequiparArma();
        }
        else if (opcao === '0') {
            console.log('Saindo da aplicação...');
        }
        else {
            console.log('Opção inválida. Por favor, escolha uma opção válida.');
        }
    };
    Jogar.prototype.adicionarArmaAoInventario = function () {
        var entrada = require('prompt-sync')();
        var nomeArma = entrada('Digite o nome da arma: ');
        var descricaoArma = entrada('Digite a descrição da arma: ');
        var quantidade = parseInt(entrada('Digite a quantidade de armas: '));
        var arma = new Arma_1.Arma(nomeArma, descricaoArma);
        try {
            this.personagem.getInventario().adicionarItem(arma, quantidade);
            console.log("".concat(quantidade, " ").concat(nomeArma, "(s) adicionado(s) ao invent\u00E1rio."));
        }
        catch (error) {
            console.log(error.message);
        }
    };
    Jogar.prototype.adicionarPocaoAoInventario = function () {
        var entrada = require('prompt-sync')();
        var nomePocao = entrada('Digite o nome da poção: ');
        var descricaoPocao = entrada('Digite a descrição da poção: ');
        var quantidade = parseInt(entrada('Digite a quantidade de poções: '));
        var pocao = new Pocao_1.Pocao(nomePocao, descricaoPocao);
        try {
            this.personagem.getInventario().adicionarItem(pocao, quantidade);
            console.log("".concat(quantidade, " ").concat(nomePocao, "(s) adicionado(s) ao invent\u00E1rio."));
        }
        catch (error) {
            console.log(error.message);
        }
    };
    Jogar.prototype.equiparArma = function () {
        var inventario = this.personagem.getInventario();
        var armas = inventario.getItemInventario().filter(function (item) { return item.getItem() instanceof Arma_1.Arma; });
        if (armas.length === 0) {
            console.log("Não há armas no inventário.");
            return;
        }
        console.log("Armamento disponível:");
        armas.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item.getItem().getNome(), " (").concat(item.getQuantidade(), ")"));
        });
        var entrada = require('prompt-sync')();
        var indiceArma = parseInt(entrada('Escolha o número correspondente à arma que deseja equipar: ')) - 1;
        if (isNaN(indiceArma) || indiceArma < 0 || indiceArma >= armas.length) {
            console.log("Opção inválida.");
            return;
        }
        var armaSelecionada = armas[indiceArma].getItem();
        this.personagem.usarItem(armaSelecionada);
        if (armaSelecionada instanceof Arma_1.Arma) {
            this.personagem.usarItem(armaSelecionada);
            console.log("Voc\u00EA equipou a arma ".concat(armaSelecionada.getNome(), "."));
        }
        else {
            console.log("Opção inválida.");
        }
    };
    Jogar.prototype.tomarPocao = function () {
        var inventario = this.personagem.getInventario();
        var pocoes = inventario.getItemInventario().filter(function (item) { return item.getItem() instanceof Pocao_1.Pocao; });
        if (pocoes.length === 0) {
            console.log("Não há poções no inventário.");
            return;
        }
        console.log("Poções disponíveis:");
        pocoes.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item.getItem().getNome(), " (").concat(item.getQuantidade(), ")"));
        });
        var entrada = require('prompt-sync')();
        var indicePocao = parseInt(entrada('Escolha o número correspondente à poção que deseja usar: ')) - 1;
        if (isNaN(indicePocao) || indicePocao < 0 || indicePocao >= pocoes.length) {
            console.log("Opção inválida.");
            return;
        }
        var pocaoSelecionada = pocoes[indicePocao].getItem();
        this.personagem.usarItem(pocaoSelecionada);
        console.log("Voc\u00EA usou a po\u00E7\u00E3o ".concat(pocaoSelecionada.getNome(), "."));
    };
    return Jogar;
}());
exports.Jogar = Jogar;
var app = new Jogar();
app.jogar();
