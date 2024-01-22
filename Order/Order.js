"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetail_1 = require("./OrderDetail");
var Order = /** @class */ (function () {
    function Order(orderID, orderDate) {
        this.lineItems = [];
        this.orderID = orderID;
        this.orderDate = orderDate;
    }
    Object.defineProperty(Order.prototype, "$orderID", {
        get: function () {
            return this.orderID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "$orderDate", {
        get: function () {
            return this.orderDate;
        },
        set: function (value) {
            this.orderDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "$lineItems", {
        get: function () {
            return this.lineItems;
        },
        enumerable: false,
        configurable: true
    });
    Order.prototype.addLineItem = function (product, quality) {
        var orderDetail = new OrderDetail_1.default(product, quality);
        this.lineItems.push(orderDetail);
    };
    Order.prototype.calcTotalCharge = function () {
        var total = 0;
        this.lineItems.forEach(function (element) {
            total += element.calcTotalPrice();
        });
        return total;
    };
    Order.prototype.toString = function () {
        return "OrderId: ".concat(this.orderID, ", OrderDate: ").concat(this.orderDate, ", TotalPrice: ").concat(this.calcTotalCharge(), " \n");
    };
    return Order;
}());
exports.default = Order;
