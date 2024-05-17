"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
var Arma_1 = require("./Arma");
var Pocao_1 = require("./Pocao");
var Personagem = /** @class */ (function () {
    function Personagem(nome, HP, MP, forca, defesa, inventario, arma) {
        this.nome = nome;
        this.hp = HP;
        this.mp = MP;
        this.forca = forca;
        this.defesa = defesa;
        this.inventario = inventario;
        this.arma = arma;
    }
    Personagem.prototype.getNome = function () {
        return this.nome;
    };
    Personagem.prototype.setNome = function (n) {
        this.nome = n;
    };
    Personagem.prototype.getHP = function () {
        return this.hp;
    };
    Personagem.prototype.setHP = function (hp) {
        this.hp = hp;
    };
    Personagem.prototype.getMP = function () {
        return this.mp;
    };
    Personagem.prototype.setMP = function (mp) {
        this.mp = mp;
    };
    Personagem.prototype.getForca = function () {
        return this.forca;
    };
    Personagem.prototype.setForca = function (frc) {
        this.forca = frc;
    };
    Personagem.prototype.getDefesa = function () {
        return this.defesa;
    };
    Personagem.prototype.setDefesa = function (def) {
        this.defesa = def;
    };
    Personagem.prototype.getInventario = function () {
        return this.inventario;
    };
    Personagem.prototype.setInventario = function (inv) {
        this.inventario = inv;
    };
    Personagem.prototype.getArma = function () {
        return this.arma;
    };
    Personagem.prototype.setArma = function (arm) {
        this.arma = arm;
    };
    Personagem.prototype.aumentarAtaque = function (valor) {
        this.forca += valor;
    };
    Personagem.prototype.diminuirAtaque = function (valor) {
        this.forca -= valor;
    };
    Personagem.prototype.aumentarDefesa = function (valor) {
        this.defesa += valor;
    };
    Personagem.prototype.diminuirDefesa = function (valor) {
        this.defesa -= valor;
    };
    Personagem.prototype.getMaxHP = function (valor) {
        this.hp *= valor;
    };
    Personagem.prototype.getMaxMP = function (valor) {
        this.hp *= valor;
    };
    Personagem.prototype.abrirInventario = function () {
        console.log("Inventário:");
        this.inventario.getItemInventario().forEach(function (itemInventario, index) {
            var item = itemInventario.getItem();
            console.log("".concat(index + 1, " - ").concat(itemInventario.getItem().getNome(), " (").concat(itemInventario.getQuantidade(), ")"));
        });
        console.log("Total: ".concat(this.inventario.getQuantidadeTotal(), "/").concat(this.inventario.getquantmaxitens()));
    };
    Personagem.prototype.usarItem = function (item) {
        if (item instanceof Arma_1.Arma) {
            if (this.arma) {
                this.arma.removerBeneficios(this);
            }
            this.arma = item;
            this.arma.aplicarBeneficios(this);
        }
        else if (item instanceof Pocao_1.Pocao) {
            item.aplicarBeneficios(this);
            for (var i = 0; i < this.inventario.getItemInventario().length; i++) {
                if (this.inventario.getItemInventario()[i].getItem().getNome() == item.getNome()) {
                    this.inventario.getItemInventario()[i].setQuantidade(this.inventario.getItemInventario()[i].getQuantidade() - 1);
                }
            }
        }
    };
    Personagem.prototype.exibirInformacoes = function () {
        console.log("Nome: ".concat(this.nome));
        console.log("HP: ".concat(this.hp));
        console.log("MP: ".concat(this.mp));
        console.log("For\u00E7a: ".concat(this.forca));
        console.log("Defesa: ".concat(this.defesa));
        console.log("Arma: ".concat(this.arma ? this.arma.getNome : "Nenhuma"));
        console.log("Invent\u00E1rio: ");
        this.inventario.getItemInventario().forEach(function (item, index) {
            console.log("".concat(index + 1, " - ").concat(item.getItem().getNome(), " (").concat(item.getQuantidade(), ")"));
        });
        console.log("Total de itens: ".concat(this.inventario.getQuantidadeTotal()));
        console.log("Limite de itens no invent\u00E1rio: ".concat(this.inventario.getquantmaxitens()));
    };
    Personagem.prototype.desequiparArma = function () {
        if (this.arma) {
            this.arma.removerBeneficios(this);
        }
        else {
            console.log("O personagem não está equipado com uma arma.");
        }
    };
    return Personagem;
}());
exports.Personagem = Personagem;
