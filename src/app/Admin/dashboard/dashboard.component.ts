import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/servises/products.service';
import { Product } from 'src/app/share/product';
import { AboutService } from '../../servises/about.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  data: FormData = new FormData();
  ImgUrl: any;
  imgBaseUrl:string = 'https://mmproject.onrender.com/';
  productList: any;
  about: string = '';
  prodForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    weight: new FormControl(),
    price: new FormControl(),
  })
  constructor(private _ProductsService:ProductsService, private _AboutService:AboutService) { }
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this._ProductsService.getAll().subscribe(res => {
      console.log(res);
      this.productList = res.data;
      console.log(this.productList)
    })
  }
  Add() {
    for (const controlName in this.prodForm.controls) {
      if (this.prodForm.controls.hasOwnProperty(controlName)) {
        const control = this.prodForm.get(controlName);
        if (Array.isArray(control?.value)) {
          // If control value is an array, send only the first element
          this.data.append(controlName, control?.value[0]);
        } else {
          this.data.append(controlName, control?.value);
        }
      }
    }
    // for (const info in this.prodForm.value) {
    //   this.data.append(info, this.prodForm.controls[info].value)
    //   console.log(info)
    // }
    console.log(this.data)
    this._ProductsService.Add(this.data).subscribe(res => {
      console.log(res);
    })
  }
  uploadimg(img: any) {
    if (img.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(img.files[0]);
      reader.onload = (img) => {
        this.ImgUrl = img.target?.result;
        console.log(img.target);
      }
    }
    this.data.append('img', <File>img.files[0]);
    console.log(img.files[0].name);
  }
  Delete(id:any) {
    console.log(id)
    this._ProductsService.Delete(id).subscribe(res => {
      console.log(res);
    })
  }
  AddAbout() {
    this._AboutService.Add(this.about).subscribe(res => {
      console.log(res);
    })
  }
}
