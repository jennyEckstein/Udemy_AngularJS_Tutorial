import { Component } from '@angular/core';

@Component({
  selector: 'jenny-event-binding',
  template: `
    <button (click)="onClicked()">Click Me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  onClicked(){
    alert('Worked');
  }
}
