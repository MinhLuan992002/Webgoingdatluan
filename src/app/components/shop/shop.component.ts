import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ActivatedRoute } from '@angular/router';
import { query } from '@angular/animations';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  listSP:any;
  constructor(private h:HttpClient,private route: ActivatedRoute){
    this.h.get("http://localhost:8080/api/v0/products",
    {observe: 'response'}
).subscribe(
res => { 
console.log("ok=", res.ok);
console.log("body=", res.body);
console.log("res=", res);
console.log("Content-Type=", res.headers.get('Content-Type'));
this.listSP= res.body; 
})
   
  }
  id: any
  ngOnInit(): void{
    this.route.paramMap.subscribe(query=>{
      this.id =query.get('id');
    })
    
  }
  isGridView = true;
  showGridView() {
    this.isGridView = true;
  }

  showListView() {
    this.isGridView = false;
  }
}