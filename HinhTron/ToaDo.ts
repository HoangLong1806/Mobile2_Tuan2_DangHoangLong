class ToaDo {
    private ten: string;
    private x: number;
    private y: number;
    constructor();
    constructor(x: number, y:number);
    constructor(x ?: number, y ?: number){
        if(x !== undefined && y !== undefined){
            this.ten = "Chua xac dinh";
            this.x = x;
            this.y = y;
        }else{
            this.ten = "Chua xac dinh";
            this.x = 0;
            this.y = 0;
        }
    }
    
    public setX(x : number) : void{
        this.x = x;
    }

    public getX() : number {
        return this.x;
    }

    public setY(y : number) : void{
        this.y = y;
    }

    public getY() : number{
        return this.y;
    }

    public toString() : string{
        return `(${this.x}, ${this.y})`
    }
}

export default ToaDo;