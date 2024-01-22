import ToaDo from "./ToaDo";

class HinhTron{
    private tam: ToaDo;
    private banKinh: number;

    constructor();
    constructor(toaDo: ToaDo, banKinh : number);
    constructor(toaDo ?: ToaDo, banKinh ?: number){
        if(toaDo !== undefined && banKinh !== undefined){
            this.tam = toaDo;
            this.banKinh = banKinh;
        }else{
            this.tam = new ToaDo(0, 0);
            this.banKinh = 0;
        }
    }

    public setTam(toaDo : ToaDo) : void{
        this.tam = toaDo;
    }

    public getTam() : ToaDo {
        return this.tam;
    }

    public setBanKinh(banKinh : number ) : void{
        this.banKinh = banKinh;
    }

    public getBanKinh() : number{
        return this.banKinh;
    }

    public tinhChuVi() : number{
        let c = Math.PI * (this.banKinh * 2);
        return c;
    }

    public tinhDienTich() : number{
        let s = Math.PI * Math.pow(this.banKinh, 2);
        return s;
    }
}

export default HinhTron