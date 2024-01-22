"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToaDo_1 = require("./ToaDo");
var HinhTron = /** @class */ (function () {
    function HinhTron(toaDo, banKinh) {
        if (toaDo !== undefined && banKinh !== undefined) {
            this.tam = toaDo;
            this.banKinh = banKinh;
        }
        else {
            this.tam = new ToaDo_1.default(0, 0);
            this.banKinh = 0;
        }
    }
    HinhTron.prototype.setTam = function (toaDo) {
        this.tam = toaDo;
    };
    HinhTron.prototype.getTam = function () {
        return this.tam;
    };
    HinhTron.prototype.setBanKinh = function (banKinh) {
        this.banKinh = banKinh;
    };
    HinhTron.prototype.getBanKinh = function () {
        return this.banKinh;
    };
    HinhTron.prototype.tinhChuVi = function () {
        var c = Math.PI * (this.banKinh * 2);
        return c;
    };
    HinhTron.prototype.tinhDienTich = function () {
        var s = Math.PI * Math.pow(this.banKinh, 2);
        return s;
    };
    return HinhTron;
}());
exports.default = HinhTron;
