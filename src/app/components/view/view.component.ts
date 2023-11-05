import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
import   localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr, 'fr');
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  products: any;
  infoProduct: any;
  id: any;
  constructor( 
    private d:DataService,  
    private route:ActivatedRoute, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    // private cartService: CartService,
  ) {
    this.infoProduct = this.formBuilder.group({
      id: [''],
      name: [''],
      stockQuantity: [''],
      price: [''],
      createDate: [''],
      updateDate: [''],
      description: [''],
      model: [''],
      discountPrice: [''],
      discount: [''],
      productStatus: [''],
      categoryId: [''],
      brandId: [''],
      OriginsId: [''],
    });
   }
//   takeProduct:IProduct={
//    id: 0, tensp:"", giasp:0, 
//    solanxem:0, hinh:"", 
//    mota:"", hot:0, ngay:"", idLoai:0 ,   
//    model: "",  
//    name: "",
//    price: 0,
//    description: "",
//    discount: 0,
//    discountPrice:0,
//    updateDate: "",
//    categoryId: 0
//  }; 
//  idSP:number=1;  
//  idLoai:number=0;
//  tenLoai:string="";
 ngOnInit(): void {
   this.id = Number(this.route.snapshot.params['id']);    
   this.d.getTakeProduct(this.id).subscribe ( 
     res => { 
       this.infoProduct  = res[this.id - 1];
      //  this.categoryId = this.takeProduct.idLoai;
       

     });

  // this.d.getTakeProduct().subscribe((data: any) => {
  //   console.log(data);
  //   this.products = data;
  // });



     
    //  }//res
    //  addToCart() {
    //   this.cartService.addToCart(this.takeProduct);
    //   this.router.navigate(['/cart']);
    }
// constructor( private d:DataService, private h: HttpClient, private cart: CartService) { 

// }
// listProduct:IProduct[] = [];
// ngOnInit(): void {
//   this.d.getNewProduct().subscribe( d => this.listProduct = d);
// }
// addToCart(product:IProduct){
//   this.cart.addToCart(product);
//   alert("Đã thêm vào giỏ hàng")
// }

//   takeProduct:IProduct={
//    id:, tensp:"", giasp:0, 
//    solanxem:0, hinh:"", 
//    mota:"", hot:0, ngay:"", idLoai:0 ,   
//    model: "",  
//    name: "",
//    price: 0,
//    description: "",
//    discount: 0,
//    discountPrice:0,
//    updateDate: "",
//    categoryId: 0
//  }; 
image1: string = 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-600x600.jpg';

// Hàm để thay đổi hình ảnh khi người dùng chọn
changeImage(imageUrl: string): void {
  this.infoProduct.images = imageUrl;
}

 }
