import HinhTron from "./HinhTron";
import ToaDo from "./ToaDo";
import * as promptSync from 'prompt-sync'

const prompt = promptSync();

function run(){
    let x = prompt("Nhap toa do x: ")
    let y = prompt("Nhap toa do y: ")
    let toado =  new ToaDo(x, y)
    console.log(toado.toString())
    let bankinh = prompt("Nhap ban kinh hinh tron: ")
    let hinhTron = new HinhTron(toado, bankinh)
    console.log(`Hình tròn có tâm O${hinhTron.getTam().toString()} với bán kính ${hinhTron.getBanKinh()} 
    có diện tích và chu vi lần lượt là ${hinhTron.tinhDienTich()} và ${hinhTron.tinhChuVi()}`)
}

run();