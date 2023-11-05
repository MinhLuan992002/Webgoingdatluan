import { Component, NgModule } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(private cartservice: CartService) { }
  name: string = "";
  email: string = "";
  address: string = "";
  phone: string = "";
  taodonhang() {
    this.cartservice.taoDonHang(this.name, this.address, this.phone, this.email).subscribe(response=>{
      console.log(response)
    })
  }
}