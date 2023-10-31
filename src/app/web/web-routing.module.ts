import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { WebComponent } from './web.component';
import { NopageFoundComponent } from '../nopage-found/nopage-found.component';


const routes: Routes = [
  {
    path:"dashboard", component: WebComponent,
  children:[
  { path:"",component:DashboardComponent},
  { path:"product",component:ProductComponent},
  { path:"category",component:CategoryComponent},
  ] 
},
  // {path:"product", component:ProductComponent},
  // {path:"Category", component:CategoryComponent},
  // {path:"",redirectTo:"/dashboard", pathMatch:"full"},
   {path:"**", component:NopageFoundComponent}
 ];
 

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class WebRoutingModule {
  
 }
