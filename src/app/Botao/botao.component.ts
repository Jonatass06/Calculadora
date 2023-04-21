import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'botao-root',
  templateUrl: './botao.component.html'
})
export class botaoComponent {

  @Input()
  texto:string;
  @Input()
  comprimento:string;
  @Input()
  altura:string;
  @Input()
  textoTamanho:string;

  @Output()
  clicouBotao = new EventEmitter;


  clicou(texto:string):void{
    this.clicouBotao.emit(texto);
  }

}
 