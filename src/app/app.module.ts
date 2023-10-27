import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WebModule } from './web/web.module';
import { AuthModule } from './auth/auth.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';

@NgModule({
  declarations: [
  AppComponent,
  NopageFoundComponent
],
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
