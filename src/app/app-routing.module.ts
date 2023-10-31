import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { WebRoutingModule } from './web/web-routing.module';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  //{path:"",redirectTo:"/dashboard", pathMatch:"full"},
  { path: "**", component: NopageFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    WebRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
