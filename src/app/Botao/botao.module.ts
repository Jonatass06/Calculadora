import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { botaoComponent } from './botao.component';

@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [
    botaoComponent
  ],
  exports: [
    botaoComponent
  ]
})
export class botaoModule { }
