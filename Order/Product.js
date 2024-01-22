"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(description, productID, price) {
        if (description !== undefined && productID !== undefined && price !== undefined) {
            this.description = description;
            this.productID = productID;
            this.price = price;
        }
        else {
            this.description = "chua xac dinh";
            this.productID = "chua xac dinh";
            this.price = 0;
        }
    }
    Product.prototype.getDescription = function () {
        return this.description;
    };
    Product.prototype.setDescription = function (description) {
        this.description = description;
    };
    Product.prototype.getProductID = function () {
        return this.productID;
    };
    Product.prototype.setProductID = function (productID) {
        this.productID = productID;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    Product.prototype.toString = function () {
        return "Description: ".concat(this.description, ", ProductId: ").concat(this.productID, ", Price: ").concat(this.price);
    };
    return Product;
}());
exports.default = Product;
