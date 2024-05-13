"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventario = void 0;
var Inventario = /** @class */ (function () {
    function Inventario() {
        this.itemInventario = [];
    }
    Inventario.prototype.getItemInventario = function () {
        return this.itemInventario;
    };
    Inventario.prototype.getquantmaxitens = function () {
        return this.quantmaxitens;
    };
    Inventario.prototype.setItemInventario = function (ItemInv) {
        this.itemInventario = ItemInv;
    };
    Inventario.prototype.setquantmaxitens = function (qti) {
        this.quantmaxitens = qti;
    };
    Inventario.prototype.adicionarItem = function () {
    };
    return Inventario;
}());
exports.Inventario = Inventario;
