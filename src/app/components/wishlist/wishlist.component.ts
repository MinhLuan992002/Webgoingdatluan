import { Component,Input, Output, EventEmitter } from '@angular/core';
import { WishService } from 'src/app/services/wish.service';
import { IProduct } from 'src/app/interfaces/iproduct';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  private item1: any[] = [];
  constructor(private wish: WishService) {
    const savedWish = localStorage.getItem('wish');
    if (savedWish) {
      this.item1 = JSON.parse(savedWish);
   }
   const count = this.wish.count();
   console.log(count);
  }

  items = this.wish.getItems();
   ngOnInit() {
    this.items = this.wish.getItems();

  }
  

  removeFromWish(sp: IProduct) {
    this.wish.removeFromWish(sp);

  }
  callCountFunction(): void {

  }

}




