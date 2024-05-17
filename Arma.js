"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arma = void 0;
var Item_1 = require("./Item");
var Arma = /** @class */ (function (_super) {
    __extends(Arma, _super);
    function Arma(nome, descricao) {
        return _super.call(this, nome, descricao) || this;
    }
    Arma.prototype.aplicarBeneficios = function (personagem) {
        personagem.aumentarAtaque(10);
        personagem.aumentarDefesa(5);
    };
    Arma.prototype.removerBeneficios = function (personagem) {
        personagem.diminuirAtaque(10);
        personagem.diminuirDefesa(5);
    };
    return Arma;
}(Item_1.Item));
exports.Arma = Arma;
