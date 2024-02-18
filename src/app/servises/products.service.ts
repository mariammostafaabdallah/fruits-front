import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../share/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl: string = 'https://mmproject.onrender.com/api/Products/'
  constructor(private _http: HttpClient) { }
  getAll(): Observable<any> {
    return this._http.get<any>(`${this.baseUrl}allprd`);
  }
  Add(newProd: FormData): Observable<any>{
    return this._http.post<any>(`${this.baseUrl}addproduct`, newProd);
  }
  getOne(id:number): Observable<Product>{
    return this._http.get<Product>(`${this.baseUrl}getOne/${id}`);
  }
  Update(id:number): Observable<Product>{
    return this._http.post<Product>(`${this.baseUrl}update/`, id);
  }
  Delete(id: string) {
    return this._http.delete(`${this.baseUrl}delprd/${id}`);
  }
}
