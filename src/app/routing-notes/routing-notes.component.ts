import {Component, OnInit} from '@angular/core';
import {Step} from '../notes/step';

@Component({
  selector: 'app-routing-notes',
  templateUrl: './routing.component.html'
})
export class RoutingNotesComponent implements OnInit {
  steps: Step[] = [];


  constructor() {
  }

  ngOnInit() {
    this.steps.push(
      new Step('Providing Routes', `RouterModule.forRoot() provide array of "path" and "component"
  
  imports: [
              BrowserModule,
              RouterModule.forRoot([
                    {path: '', component: HomeComponent},
                    {path: 'if', component: IfComponent},
                    {path: 'routing', component: RoutingNotesComponent},
                    {path: '**', component: NotFoundComponent}
              ])
           ]

  RouterModule.forChild(Routes) for sub routing`));

    this.steps.push(
      new Step('configuring router-outlet', `
      &lt;router-outlet&gt;&lt;/router-outlet&gt;
      add it where routes needs to be applied. Mostly inside app.component.html`));


    this.steps.push(
      new Step('Router Link',
        `
        &lt;a class="nav-link " routerLink="/anything">Action&lt;/a&gt;
        rather than href use router link other wise whole page will refresh`));

    this.steps.push(
      new Step('Router Link with parameter',
        `
        &lt;a class="nav-link " [routerLink]="['/anything','dynamicParameter']"&gt;Action&lt;/a&gt;
        when router path have a dynamic parameter then use routerLink as parameter binding`));

    this.steps.push(
      new Step(`Getting Route parameter inside component class">Action</a>`,
        `
         inside component class we should get parameter value of the route as we might want to call a service using this 
         parameter. To do this we have to inject ActivatedRoute inside component via constructor.
         
         export class MyComponent()implements OnInit {
         
         constructor(private route : ActivatedRoute){
         }
         
         ngOnInit(){
          this.route.paramMap
          .subscribe(params=>{
              console.log(params);
          })
         }
         }
         
         this.route.paramMap is an Observable so we are passing a function to observe the value. 
        `));

    this.steps.push(
      new Step('routerLinkActive',
        `to apply a class if a current router is active. for example making background in different color
         routerLinkActive="bg-danger"`));

  }

}
