import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AboutService {
  baseUrl: string = 'https://mmproject.onrender.com/api/Content/';
  constructor(private _http: HttpClient) { }
  Get(): Observable<any>{
    return this._http.get<any>(`${this.baseUrl}content`);
  }
  Add(content: string): Observable<any>{
    return this._http.post<any>(`${this.baseUrl}addcontent`, content);
  }
}
