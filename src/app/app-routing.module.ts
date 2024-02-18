import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './User/home/home.component';
import { AboutComponent } from './User/about/about.component';
import { ShopComponent } from './User/shop/shop.component';
import { NotFoundComponent } from './User/not-found/not-found.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "store", component: ShopComponent },
  { path: "details/:id", component: ShopComponent },
  { path: "Admin_CPanal", component: DashboardComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
