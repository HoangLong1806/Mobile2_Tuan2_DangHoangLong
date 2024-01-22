class Product {

    private description : string;
    private productID : string;
    private price : number;

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getProductID(): string {
        return this.productID;
    }

    public setProductID(productID: string): void {
        this.productID = productID;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    constructor(description ?: string, productID ?: string, price ?: number){
        if(description !== undefined && productID !== undefined && price !== undefined){
            this.description = description;
            this.productID = productID;
            this.price = price;
        }else{
            this.description = "chua xac dinh";
            this.productID = "chua xac dinh";
            this.price = 0;
        }
    }

    public toString() : string {
        return `Description: ${this.description}, ProductId: ${this.productID}, Price: ${this.price}`
    }

}

export default Product