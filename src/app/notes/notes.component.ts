import {Component, Input} from '@angular/core';
import {Step} from './step';

@Component(
  {
    selector: 'app-notes',
    templateUrl: './notes.component.html',
  }
)
export class NotesComponent {
  @Input() public steps: Step[];
}
