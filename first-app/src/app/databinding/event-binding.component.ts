import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'jenny-event-binding',
  template: `
    <button (click)="onClicked()">Click Me!</button>
  `,
  styles: []
})
export class EventBindingComponent {

  @Output() clicked = new EventEmitter<string>();

  onClicked(){
    this.clicked.emit('It works');
  }
}
