"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var ItemMenu_1 = require("./ItemMenu");
var Menu = /** @class */ (function () {
    function Menu() {
        this.itensMenu = [];
    }
    Menu.prototype.addItem = function (opcao, textoOpcao) {
        this.itensMenu.push(new ItemMenu_1.ItemMenu(opcao, textoOpcao));
    };
    Menu.prototype.imprimirMenu = function () {
        console.log("Opções do Menu:");
        this.itensMenu.forEach(function (item) {
            console.log("".concat(item.getOpcao(), ": ").concat(item.getTextoOpcao()));
        });
        return "";
    };
    return Menu;
}());
exports.Menu = Menu;
