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
exports.Pocao = void 0;
var Item_1 = require("./Item");
var Pocao = /** @class */ (function (_super) {
    __extends(Pocao, _super);
    function Pocao(nome, descricao) {
        return _super.call(this, nome, descricao) || this;
    }
    Pocao.prototype.aplicarBeneficios = function (personagem) {
        var hpAumentado = personagem.getMaxHP(0.5);
        var mpAumentado = personagem.getMaxMP(0.2);
    };
    Pocao.prototype.removerBeneficios = function (personagem) { };
    return Pocao;
}(Item_1.Item));
exports.Pocao = Pocao;
