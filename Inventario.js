"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventario = void 0;
var inventariocheio_1 = require("./inventariocheio");
var ItemInventario_1 = require("./ItemInventario");
var Inventario = /** @class */ (function () {
    function Inventario(quantidadeMaximaItens) {
        this.itens = [];
        this.quantmaxitens = quantidadeMaximaItens;
        this.itens = [];
    }
    Inventario.prototype.getItemInventario = function () {
        return this.itens;
    };
    Inventario.prototype.getquantmaxitens = function () {
        return this.quantmaxitens;
    };
    Inventario.prototype.setItemInventario = function (ItemInv) {
        this.itens = ItemInv;
    };
    Inventario.prototype.setquantmaxitens = function (qti) {
        this.quantmaxitens = qti;
    };
    Inventario.prototype.getQuantidadeTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.itens; _i < _a.length; _i++) {
            var itemInventario = _a[_i];
            total += itemInventario.getQuantidade();
        }
        return total;
    };
    Inventario.prototype.adicionarItem = function (item, quantidade) {
        if (quantidade === void 0) { quantidade = 1; }
        if (this.itens.length >= this.quantmaxitens) {
            throw new inventariocheio_1.InventarioLimiteException("Inventário cheio. Não é possível adicionar mais itens.");
        }
        var itemExistente = this.itens.findIndex(function (itemInventario) { return itemInventario.getItem() === item; });
        if (itemExistente !== -1) {
            this.itens[itemExistente].setQuantidade(quantidade);
        }
        else {
            this.itens.push(new ItemInventario_1.ItemInventario(item, quantidade));
        }
    };
    Inventario.prototype.removerItem = function (item) {
        var index = this.itens.findIndex(function (itemInv) { return itemInv.getItem() === item; });
        if (index !== -1) {
            this.itens.splice(index, 1);
        }
    };
    return Inventario;
}());
exports.Inventario = Inventario;
