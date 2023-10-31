import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    UserComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    // AppRoutingModule
  ],
  exports: [
    LoginComponent,
    UserComponent,
    RegisterComponent],
})
export class AuthModule { }
