import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/share/product';
import { ProductsService } from '../../servises/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  products: Product[] = [];
  constructor() { }
  ngOnInit(): void {
    // this.getAll();
  }
  // getAll() {
  //   this._ProductsService.getAll().subscribe(res => {

  //   })
  // }
}
