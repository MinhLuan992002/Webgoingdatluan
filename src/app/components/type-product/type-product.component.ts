import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Itypeprd } from 'src/app/interfaces/itypeprd';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-type-product',
  templateUrl: './type-product.component.html',
  styleUrls: ['./type-product.component.css']
})
export class TypeProductComponent {

  constructor(private d:DataService) { }
  listTypePro:Itypeprd[] = [];
  ngOnInit(): void {
    this.d.getTypeProduct().subscribe( d => this.listTypePro = d);
  }
}

