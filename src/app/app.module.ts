import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuestionService } from './Shared/Services/question.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,    AppRoutingModule ],
   providers: [QuestionService],
  declarations: [ AppComponent, HelloComponent, QuestionsComponent, NavBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
