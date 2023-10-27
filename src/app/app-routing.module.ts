import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { ProductComponent } from './web/product/product.component';
import { CategoryComponent } from './web/category/category.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';

const routes: Routes = [
 {path:"login", component:LoginComponent},
 {path:"register", component:RegisterComponent},
 {path:"dashboard", component:DashboardComponent},
 {path:"product", component:ProductComponent},
 {path:"Category", component:CategoryComponent},
 {path:"",redirectTo:"/dashboard", pathMatch:"full"},
 {path:"**", component:NopageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
