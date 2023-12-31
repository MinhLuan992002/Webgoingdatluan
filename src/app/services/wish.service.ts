import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IWish } from '../interfaces/iwish';
@Injectable({
  providedIn: 'root'
})
export class WishService {

   itemts: IWish[] = [];
   constructor(private h: HttpClient) { 
    const saveWish = localStorage.getItem('wish');
    if (saveWish) {
      this.itemts = JSON.parse(saveWish);
   }
  }
  addToWish(sp: IProduct) {
    const index = this.itemts.findIndex(item => item.id == sp.id);
    if (index >= 0) {
      const item = this.itemts[index];
    //   item.soluong++;
    //   item.tongTien = item.price * item.soluong;

    }
    else {
      const item: IWish = {
        id: sp.id,
        hinh: sp.hinh,
        images:sp.images,
        soluong: 1,
        solanxem: 0,
        hot: 1,
        mota: sp.mota,
        ngay: sp.ngay,
        idType: sp.idType,
        description: sp.description,
        discount: sp.discount,
        discountPrice: sp.discountPrice,
        model: sp.model,
        name: sp.name,
        price: sp.price ,
        updateDate: sp.updateDate,
        categoryId: sp.categoryId
      }
      
      this.itemts.push(item)
     
    }
    this.saveWishToLocalStorage();
    
  }

  removeFromWish(sp: IProduct) {
    const index = this.itemts.findIndex(item => item.id === sp.id);
    if (index > -1) {
      this.itemts.splice(index, 1);
      // this.cartSubject.next(this.cartItems);
          this.saveWishToLocalStorage();
    }
  }
  private saveWishToLocalStorage() {
    localStorage.setItem('wish', JSON.stringify(this.itemts));
  }



  clearWish() {
    this.itemts = [];
    this.saveWishToLocalStorage();
    return this.itemts
  }
  getItems() { return this.itemts };
  count(){
    return this.itemts.length;
  }
}

