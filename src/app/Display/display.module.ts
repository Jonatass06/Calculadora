import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { displayComponent } from './display.component';
import { botaoModule } from '../Botao/botao.module';

@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [
    displayComponent
  ],
  exports: [
    displayComponent
  ]
})
export class displayModule { }
