import Product from "./Product";

class OrderDetail {
    private quality : number;
    
    private product : Product;
    
    public getQuality(): number {
        return this.quality;
    }

    public setQuality(quality: number): void {
        this.quality = quality;
    }

    constructor(product : Product, quality : number){
        this.product = product;
        this.quality = quality;
    }

    public toString() : string {
        return `${this.product.toString()}, Quality: ${this.quality}`
    }

    public calcTotalPrice() : number{
        let total : number = this.product.getPrice() * this.quality;
        return total;
    }
}

export default OrderDetail;