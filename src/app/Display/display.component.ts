import { Component, Input } from '@angular/core';

@Component({
  selector: 'display-root',
  templateUrl: './display.component.html'
})
export class displayComponent {
  @Input()
  texto:string;

}
 