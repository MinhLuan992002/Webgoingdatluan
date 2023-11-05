import { Component, Input } from '@angular/core';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { WishService } from 'src/app/services/wish.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  count: number; 
  cartItems: any;
  constructor( private wish: WishService, private cart:CartService){
     this.count = this.wish.count();
  }
  ngOnInit() {
    this.cart.getCartItems().subscribe((items) => {
      this.cartItems = items;
      console.log(this.cartItems)
    });
  }
}
