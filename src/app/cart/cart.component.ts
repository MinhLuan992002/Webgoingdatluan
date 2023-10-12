import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../iproduct';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  constructor(private cart: CartService){}
  items = this.cart.getItems();
  ngOnInit() {
    this.items = this.cart.getItems();
    


    


  }

  
   

  tongtien(){
    let tt:number = 0;
    this.items.forEach(item => tt = tt + Number(item.tongTien));
    return tt;
  }
  giamSoLuong(item1:any){
    const item = this.items.find(item=>item.id == item1.id);
    if(item != undefined && item.soluong >0){
      item.soluong --;
      item.tongTien -=item.giasp;
    }
  }

  tangSoLuong(item1:any){
    const item = this.items.find(item=>item.id == item1.id);
    if(item != undefined){
      item.soluong++;
      item.tongTien =item.soluong * item.giasp;
    }
  }
  tongsoluong(item1:any){
    let tsl: number =0;
    this.items.forEach( item=> {
      if(item.id == item1.id){
        tsl +=item.soluong
      }  
    })
    return tsl;
  }
  removeFromCart(sp: IProduct) {
    this.cart.removeFromCart(sp);
  }
  clearCart() { }
  
}


