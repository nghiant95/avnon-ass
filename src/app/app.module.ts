import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainViewComponent } from './main-view/main-view.component';
import { ViewAnwserComponent } from './view-anwser/view-anwser.component';
import { StateModule } from './state/state.module';
// import { NzModalModule } from 'ng-zorro-antd/modal';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    NewQuestionComponent,
    MainViewComponent,
    ViewAnwserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // NzModalModule,
    StateModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
