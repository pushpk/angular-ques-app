import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { QuestionsComponent } from './questions/questions.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, QuestionsComponent, NavBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
