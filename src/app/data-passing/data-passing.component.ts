import {Component, OnInit} from '@angular/core';
import {Step} from '../notes/step';

@Component({
  selector: 'app-data-passing',
  templateUrl: './data-passing.component.html',
  styleUrls: ['./data-passing.component.css']
})
export class DataPassingComponent implements OnInit {

  steps: Step[] = [];

  ngOnInit() {
    this.steps.push(new Step('Parent to Child', `
    1. In Child Component add input field
     @Input() public steps: Step[];
      
    2. In Parent template-file pass data using attribute binding
    &lt;app-notes [steps]="steps"&gt;&lt;/app-notes&gt;`));
    this.steps.push(new Step('Child to parent', `
    1. In child component add a @output as eventEmitter. Use this even emitter to pass data as an event
     
      @Output() eventEmitter: EventEmitter&lt;Step[]&gt; = new EventEmitter();
    
      // from any method in child
      this.eventEmitter.emit(this.steps);
     
    2. In Parent component template-file add handle event by providing a function to work with event.
        &lt;app-notes  (eventEmitter)="processMe($event)" &gt; &lt;/app-notes&gt;       
       processMe method in Parent will have all the steps available a an event`));


  }
}
