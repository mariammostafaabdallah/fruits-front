import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../servises/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/share/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  productId: number = 0;
  product?: Product;
  constructor() { }
  ngOnInit(): void {
    // this.Get();
  }
  // Get() {
  //   this._ActivatedRoute.params.subscribe(data => {
  //     this.productId = data["id"] as number;
  //   })
  //   this._ProductsService.getOne(this.productId).subscribe(res => {
  //     console.log(res);
  //   })
  // }
}
