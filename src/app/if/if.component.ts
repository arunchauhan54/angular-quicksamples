import {Component, OnInit} from '@angular/core';
import {Step} from '../notes/step';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
})
export class IfComponent implements OnInit {
  records: Record[];
  selectedRecords: Record[] = [];
  steps: Step[]= [];

  constructor() {
  }

  ngOnInit() {
    this.records = [
      new Record('1', 'record1'),
      new Record('2', 'record2'),
      new Record('3', 'record3'),
      new Record('4', 'record4'),
      new Record('5', 'record5'),
      new Record('6', 'record6')
    ];

    this.steps.push(new Step("*ngIf","*ngIf=\"selectedRecords.length >0\""));
    this.steps.push(new Step("*ngFor","*ngFor=\"let selected of selectedRecords\""));
    this.steps.push(new Step("String interpolation","variableName inside 2 curly bracket"));
    this.steps.push(new Step("[(ngModel)] banana in a box","2 way object binding"));
    this.steps.push(new Step("method call and event passing","(change)=\"selectedRecord($event)\"   - for on change all method selectedRecord() nd pass event as argument"));
  }

  selectedRecord(event) {
    let srcElement = event.srcElement;
    let record = new Record(srcElement.id,srcElement.value);
    console.log(event);
    if(srcElement.checked) {
      this.selectedRecords.push(record);
    }else {
      this.selectedRecords = this.selectedRecords.filter(value => value.id != srcElement.id);
    }
  }




}

class Record {
  constructor(public id: string, public value: string) {
  }
}
