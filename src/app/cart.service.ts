import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';
import { Icart } from './icart';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private h: HttpClient) { }
  private itemts: Icart[] = [];
  addToCart(sp: IProduct) {
    const index = this.itemts.findIndex(item => item.id == sp.id);
    if (index >= 0) {
      const item = this.itemts[index];
      item.soluong++;
      item.tongTien = item.giasp * item.soluong;
    }
    else {
      const item: Icart = {
        id: sp.id,
        tensp: sp.tensp,
        giasp: sp.giasp,
        hinh: sp.hinh,
        soluong: 1,
        solanxem: 0,
        hot: 1,
        mota: sp.mota,
        ngay: sp.ngay,
        idLoai: sp.idLoai,
        tongTien: sp.giasp
      }
      this.itemts.push(item)
    }
  }
  removeFromCart(sp: IProduct) {
    const index = this.itemts.findIndex(item => item.id === sp.id);
    if (index > -1) {
      this.itemts.splice(index, 1);
      // this.cartSubject.next(this.cartItems);
    }
  }


  clearCart() { this.itemts = []; return this.itemts }
  getItems() { return this.itemts };
}

