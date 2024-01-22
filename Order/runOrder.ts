import Order from "./Order";
import Product from "./Product";

let product4 : Product  = new Product("Nuoc tuong", "sp4", 8000)
let product1 : Product  = new Product("Gao", "sp1", 18000)
let product3 : Product  = new Product("Duong", "sp3", 10000)

let order : Order = new Order(1, new Date());
order.addLineItem(product4, 10)
order.addLineItem(product1, 6)
order.addLineItem(product3, 1)

console.log(order.toString())