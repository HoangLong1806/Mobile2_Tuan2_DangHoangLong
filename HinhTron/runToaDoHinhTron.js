"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HinhTron_1 = require("./HinhTron");
var ToaDo_1 = require("./ToaDo");
var promptSync = require("prompt-sync");
var prompt = promptSync();
function run() {
    var x = prompt("Nhap toa do x: ");
    var y = prompt("Nhap toa do y: ");
    var toado = new ToaDo_1.default(x, y);
    console.log(toado.toString());
    var bankinh = prompt("Nhap ban kinh hinh tron: ");
    var hinhTron = new HinhTron_1.default(toado, bankinh);
    console.log("H\u00ECnh tr\u00F2n c\u00F3 t\u00E2m O".concat(hinhTron.getTam().toString(), " v\u1EDBi b\u00E1n k\u00EDnh ").concat(hinhTron.getBanKinh(), " \n    c\u00F3 di\u1EC7n t\u00EDch v\u00E0 chu vi l\u1EA7n l\u01B0\u1EE3t l\u00E0 ").concat(hinhTron.tinhDienTich(), " v\u00E0 ").concat(hinhTron.tinhChuVi()));
}
run();
