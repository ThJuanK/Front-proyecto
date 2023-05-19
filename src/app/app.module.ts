import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion/confirmacion.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { ErrorComponent } from './pages/error-component/error/error.component';
import { VerificacionComponent } from './pages/confirmacion/verificacion/verificacion.component';



@NgModule({
  declarations: [
    AppComponent,
    ConfirmacionComponent,
    ErrorComponent,
    VerificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNgModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
