import { IProduct } from "./iproduct";

export interface Icart extends IProduct {
        id:number;
        tensp:string;
        giasp:number;
        soluong:number;
        hinh:string;
        tongTien:number;
        solanxem:number;
    hot:number;
    mota:string;
    ngay:string;
    idLoai:number;
    
}
