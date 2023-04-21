import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './Calculadora/calculadora.module';

@NgModule({
  imports: [
    BrowserModule,
    CalculadoraModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
