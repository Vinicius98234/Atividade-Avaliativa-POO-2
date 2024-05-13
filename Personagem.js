"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem() {
        this.inventario = [];
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
    return Personagem;
}());
exports.Personagem = Personagem;
