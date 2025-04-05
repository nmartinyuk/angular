import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template:
`
<h1 *ngIf="displayName; else elseBlock">Hello from test component</h1>
<ng-template #elseBlock>
The test component is hidden
</ng-template>
<h1>Output from app: {{appOutput}}</h1>
<button (click)="fireEvent()">Send Event</button>
`,
  standalone: false
})
export class TestComponent {
  displayName = true;
  @Input() public appOutput: any;
  @Output() public childEvent = new EventEmitter();
  fireEvent() {
    this.childEvent.emit('Hey!');
  }
}
