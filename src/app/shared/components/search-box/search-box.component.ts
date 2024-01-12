import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input() graoPlaceholder: string = '';

  @Output() valueFromChild = new EventEmitter<string>()



  emiteValue(texto:string){
    console.log('emite value', texto);
    this.valueFromChild.emit(texto);
    
    const pepe: string ='';

  }
}
