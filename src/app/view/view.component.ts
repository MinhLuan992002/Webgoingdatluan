import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Data } from '@angular/router';
import { IProduct } from '../iproduct';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor( 
    private d:DataService,  
    private route:ActivatedRoute 
  ) { }
  takeProduct:IProduct={
   id:0, tensp:"", giasp:0, 
   solanxem:0, hinh:"", 
   mota:"", hot:0, ngay:"", idLoai:0
 }; 
 idSP:number=0;  
 idLoai:number=0;
 tenLoai:string="";
 ngOnInit(): void {
   this.idSP = Number(this.route.snapshot.params['id']);    
   this.d.getTakeProduct(this.idSP).subscribe ( 
     res => { 
       this.takeProduct  = res[0];
       this.idLoai = this.takeProduct.idLoai;

     });
     }//res
 }
