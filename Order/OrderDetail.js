"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetail = /** @class */ (function () {
    function OrderDetail(product, quality) {
        this.product = product;
        this.quality = quality;
    }
    OrderDetail.prototype.getQuality = function () {
        return this.quality;
    };
    OrderDetail.prototype.setQuality = function (quality) {
        this.quality = quality;
    };
    OrderDetail.prototype.toString = function () {
        return "".concat(this.product.toString(), ", Quality: ").concat(this.quality);
    };
    OrderDetail.prototype.calcTotalPrice = function () {
        var total = this.product.getPrice() * this.quality;
        return total;
    };
    return OrderDetail;
}());
exports.default = OrderDetail;
