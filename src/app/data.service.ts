import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private h: HttpClient) {  }
  getTakeProduct(idSP:Number=0){
    var url = `http://localhost:3000/sanpham?id=${idSP}`;
    return this.h.get<IProduct[]>(url);

}
}
