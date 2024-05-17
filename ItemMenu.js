"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemMenu = void 0;
var ItemMenu = /** @class */ (function () {
    function ItemMenu(opcao, textoOpcao) {
        this.opcao = opcao;
        this.textoOpcao = textoOpcao;
    }
    ItemMenu.prototype.getOpcao = function () {
        return this.opcao;
    };
    ItemMenu.prototype.setOpcao = function (o) {
        this.opcao = o;
    };
    ItemMenu.prototype.getTextoOpcao = function () {
        return this.textoOpcao;
    };
    ItemMenu.prototype.setTextoOpcao = function (txtop) {
        this.textoOpcao = txtop;
    };
    return ItemMenu;
}());
exports.ItemMenu = ItemMenu;
