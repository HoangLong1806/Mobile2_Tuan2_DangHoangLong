import OrderDetail from "./OrderDetail";
import Product from "./Product";

class Order {
    private orderID : number;
    private orderDate : Date;
    private lineItems : OrderDetail[] = [];
    private count : number;

	public get $orderID(): number {
		return this.orderID;
	}

	public get $orderDate(): Date {
		return this.orderDate;
	}

	public set $orderDate(value: Date) {
		this.orderDate = value;
	}

	public get $lineItems(): OrderDetail[]  {
		return this.lineItems;
	}

	constructor(orderID : number, orderDate : Date) {
		this.orderID = orderID;
        this.orderDate = orderDate;
	}

    public addLineItem(product : Product, quality : number) : void{
        let orderDetail = new OrderDetail(product, quality);
        this.lineItems.push(orderDetail);
    }
    
    public calcTotalCharge() : number{
        let total:number = 0;
        this.lineItems.forEach(element => {
            total += element.calcTotalPrice();
        });
        return total;
    }

    public toString() : string {
        return `OrderId: ${this.orderID}, OrderDate: ${this.orderDate}, TotalPrice: ${this.calcTotalCharge()} \n`
    }
}

export default Order