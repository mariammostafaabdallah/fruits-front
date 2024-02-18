import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/servises/products.service';
import { Product } from 'src/app/share/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products: Product[] = [];
  constructor(private _ProductsService:ProductsService) { }
  ngOnInit(): void {
this.getAll();
  }
getAll() {
this._ProductsService.getAll().subscribe(res => {
console.log(res)
})
  }
}
