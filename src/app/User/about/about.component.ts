import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/servises/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  about: string = '';
  constructor(private _AboutService:AboutService) { 
    console.log('about')
  }
  ngOnInit(): void {
     this.get();
  }
  get() {
    this._AboutService.Get().subscribe(res => {
      console.log(res);
      this.about = res.data;
    })
  }
}
