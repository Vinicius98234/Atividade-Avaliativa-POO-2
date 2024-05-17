"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemInventario = void 0;
var ItemInventario = /** @class */ (function () {
    function ItemInventario(item, quantidade) {
        this.quantidade = quantidade;
        this.item = item;
    }
    ItemInventario.prototype.getQuantidade = function () {
        return this.quantidade;
    };
    ItemInventario.prototype.setQuantidade = function (q) {
        this.quantidade = q;
    };
    ItemInventario.prototype.getItem = function () {
        return this.item;
    };
    ItemInventario.prototype.setItem = function (it) {
        this.item = it;
    };
    return ItemInventario;
}());
exports.ItemInventario = ItemInventario;
