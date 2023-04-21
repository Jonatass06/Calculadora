import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';
import { botaoModule } from '../Botao/botao.module';
import { displayModule } from '../Display/display.module';

@NgModule({

  imports: [
    CommonModule,
    botaoModule,
    displayModule
  ],
  declarations: [
    CalculadoraComponent
  ],
  exports: [
    CalculadoraComponent
  ]
})
export class CalculadoraModule { }
