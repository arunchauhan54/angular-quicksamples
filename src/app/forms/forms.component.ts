import {Component, OnInit} from '@angular/core';
import {Step} from '../notes/step';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  steps: Step[] = [];

  log(event){
    console.log(event);
  }

  ngOnInit(): void {
    this.steps.push(new Step('Form Structure', `
    &lt;form &gt;
        &lt;div class="form-group"&gt;
           &lt;div class="form-control"&gt;
              &lt;label for="inputName"&gt;First Name&lt;/label&gt;
              &lt;input 
              <strong>ngModel</strong>
              name="inputName" 
              <strong>#inputName</strong>="ngModel"
              id="inputName"
              type="text"
              pattern="[a-z,A-Z]*"
              required&gt;
           &lt;/div&gt;
        &lt;/div&gt;
    &lt;/form&gt;

<strong>ngModel</strong> will create a model for the given form-control input field
<strong>#inputName</strong> is template variable and it will have value of ngModel
`));

    this.steps.push(new Step('validation', `

    &lt;div&gt;
      &lt;div class="alert alert-warning" *ngIf="<strong>inputName</strong>.touched && inputName?.errors?.pattern"&gt;invalid pattern&lt;/div&gt;
    &lt;/div&gt; 
    
    <strong>inputName</strong> is ngModel which have a lot of useful properties. It is a child of ngForm. NgModel keeps a FormControl which have a lot of relevant status which can be used 
    for validation as it contains all the errors and result after validation. Few relevant status are -
    
    touched - field had focus and unfocused
    dirty - field data modified
    pristine - fields data not modified
    valid - field is valid
    invalid - field is invalid
    status - valid/invalid
    enabled
    disabled
    errors
       
    `));
  }
}
