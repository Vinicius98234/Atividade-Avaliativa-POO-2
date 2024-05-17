"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(n, d) {
        this.nome = n;
        this.descricao = d;
    }
    Item.prototype.getNome = function () {
        return this.nome;
    };
    Item.prototype.setNome = function (nmi) {
        this.nome = nmi;
    };
    Item.prototype.getDescricao = function () {
        return this.descricao;
    };
    Item.prototype.setDescricao = function (dc) {
        this.descricao = dc;
    };
    return Item;
}());
exports.Item = Item;
