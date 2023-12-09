import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewQuestionComponent } from './new-question/new-question.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ViewAnwserComponent } from './view-anwser/view-anwser.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'form/builder',
    component: MainViewComponent,
  },
  {
    path: 'form/add-new',
    component: NewQuestionComponent,
  },
  {
    path: 'form/answers',
    component: ViewAnwserComponent,
  },
  // {
  //   path: 'form',
  //   component: MainViewComponent,
  //   children: [
  //     {
  //       path: 'builder',
  //       component: MainViewComponent,
  //     },
  //     {
  //       path: 'add-new',
  //       component: NewQuestionComponent,
  //     },
  //     {
  //       path: 'answers',
  //       component: ViewAnwserComponent,
  //     },
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
