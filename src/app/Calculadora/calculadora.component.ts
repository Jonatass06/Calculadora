import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'calc-root',
  templateUrl: './calculadora.component.html'
})
export class CalculadoraComponent {


  igual:boolean = false;
  textoB: string = "";
  ponto:boolean = true;

  clicou(texto: string): void {
    if (texto == "Delete") {
      this.textoB = "";
      this.igual = false;
      this.ponto = true;
    }
    else if (texto == "Back") {
      if(this.textoB.slice(-1) == "."){
        this.ponto = false;
      }
      this.textoB = this.textoB.substring(0, this.textoB.length - 1);
      this.igual = false;
    }
    else if (texto == "=") {
      if(this.textoB.slice(-1) == "+" || this.textoB.slice(-1) == "/" || this.textoB.slice(-1) == "*" || this.textoB.slice(-1) == "-"){
        this.textoB = this.textoB.substring(0, this.textoB.length - 1);
      }

      let calculo: number = eval(this.textoB)
      if (!Number.isInteger(calculo)){
        this.textoB = eval(this.textoB).toFixed(10).toString()
      } else{
        this.textoB = eval(this.textoB).toString()
      }
      this.igual = true;
    } 
    else if (texto == ".") {
      if(this.textoB.slice(-1) == "+" || this.textoB.slice(-1) == "/" || this.textoB.slice(-1) == "*" || this.textoB.slice(-1) == "-"){
        this.ponto = true;
      }
      if(!this.ponto){
        this.textoB += "."
        this.ponto = true;
      }
      if(this.igual){
        this.igual = false;
        this.ponto = true;
        this.textoB = "";
      }
    }
    else {
      if(texto == "+" || texto == "/" || texto == "*" || texto == "-"){
        this.igual = false;
        if(this.textoB.slice(-1) != "+" && this.textoB.slice(-1) != "/" && this.textoB.slice(-1) != "*" && this.textoB.slice(-1) != "-"){
          this.textoB+=texto;
        } else{
          this.textoB = this.textoB.substring(0, this.textoB.length - 1)
          this.textoB+=texto;
        }
      }
      else{

        if(this.textoB.slice(-1) == "+" || this.textoB.slice(-1) == "/" || this.textoB.slice(-1) == "*" || this.textoB.slice(-1) == "-"){
          this.ponto = false;
        }

        if(this.textoB.length==0){
          this.ponto = false;
        }
        if(this.igual == true){
          this.textoB = "";
          this.igual = false;
        }
        this.textoB+=texto;
      }
    }
  }
}
