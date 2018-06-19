import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {IfComponent} from './if/if.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {APP_BASE_HREF} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RoutingNotesComponent} from './routing-notes/routing-notes.component';
import {FormsComponent} from './forms/forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotesComponent} from './notes/notes.component';
import { DataPassingComponent } from './data-passing/data-passing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IfComponent,
    NotFoundComponent,
    HomeComponent,
    RoutingNotesComponent,
    FormsComponent,
    NotesComponent,
    DataPassingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'if', component: IfComponent},
      {path: 'routing', component: RoutingNotesComponent},
      {path: 'forms', component: FormsComponent},
      {path: 'dataPassing', component: DataPassingComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
