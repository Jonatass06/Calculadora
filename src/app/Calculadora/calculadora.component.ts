import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'calc-root',
  templateUrl: './calculadora.component.html'
})
export class CalculadoraComponent {



  textoB: string = ""
  resultado = true;
  ponto = false;

  clicou(texto: string): void {
    if (texto == "Delete") {
      this.textoB = ""
      this.ponto = false;
    }
    else if (texto == "Back") {
      if (this.textoB.slice(-1) == ".") {
        this.ponto = false;
      }
      this.textoB = this.textoB.substring(0, this.textoB.length - 1)
    }
    else if (texto == "=") {
      this.textoB = eval(this.textoB)
      this.resultado = false;
      this.ponto = false;
    } else if (texto == "." && this.ponto == false) {
      this.textoB += "."
      this.ponto = true;
    }
    else {

      if (this.textoB.slice(-1) == "+" || this.textoB.slice(-1) == "-" || this.textoB.slice(-1) == "*" || this.textoB.slice(-1) == "/") {
        this.ponto = true;
        if (texto != "+" && texto != "-" && texto != "*" && texto != "/" && texto != ".") {
          this.ponto = false;
        }
      }

      if (texto != ".") {
        if (!this.resultado && texto != "+" && texto != "-" && texto != "*" && texto != "/") {

          this.textoB = ""
          this.resultado = true;
        }
        else {
          this.resultado = true;
        }
        if (texto == "+" || texto == "-" || texto == "*" || texto == "/" || texto == ".") {

          if (this.textoB.slice(-1) == "+" || this.textoB.slice(-1) == "-" || this.textoB.slice(-1) == "*" || this.textoB.slice(-1) == "/" || this.textoB.slice(-1) == ".") {
          } else {
            this.textoB += texto;
          }
        } else {
          this.textoB += texto;
        }
      }
    }
  }
}
