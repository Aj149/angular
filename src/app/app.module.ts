import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WebModule } from './web/web.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
  AppComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    WebModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
