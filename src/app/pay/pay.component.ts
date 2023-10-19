import { Component, NgModule } from '@angular/core';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
  
})

export class PayComponent {
    
    constructor( private cartservice:CartService) {}
    
    hoten:string ="";
    email:string ="";
    diachi:string ="";
    dienthoai:string ="";
    
    //các hàm
    taodonhang(){
      this.cartservice.taoDonHang(this.hoten,this.diachi,this.dienthoai,this.email).subscribe(
         response => {
           console.log(response); 
           console.log(response.body); //trong body có biến id của order mới chèn
           console.log(response.ok); //biến od=k =true là request ok       
            //lấy id của đơn hàng mới + lưu các sản phẩm trong cart lên server
       if (response.ok==false) { 
        alert(response.statusText); //hiện lỗi
     } else {
       let body:any = response.body; let idDH:number = Number(body.id); 
       this.cartservice. itemts.forEach( 
         item => this.cartservice.luuChiTietDonhang( idDH,  item).subscribe( res => console.log(res))
       )
     }//else
     location.href="/";
         }
     );
    }//taodonhang
    
}
