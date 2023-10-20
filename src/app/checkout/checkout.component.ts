import { Component, NgModule } from '@angular/core';
import { IProduct } from '../iproduct';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
    
  constructor( private cartservice:CartService) {}
  name: string ="";
  email:string ="";
  address :string ="";
  phone:string ="";
  
  //các hàm
  taodonhang(){
    this.cartservice.taoDonHang(this.name,this. address,this.phone,this.email).subscribe(
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
