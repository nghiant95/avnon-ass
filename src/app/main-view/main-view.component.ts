import { Component, OnDestroy, OnInit } from '@angular/core';
import { Answer, Question } from '../model/question.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StateActions, StateSelectors } from '../state/state.state';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit, OnDestroy {

  KEYSTORE= 'DATA';
  listQuestion: Question[] = [
    {
      type: 1,
      question: 'Please tell us about yourself',
      answer: [
        {
          name: '',
          selected: false
        }
      ],
      isSpecify: false,
      isRequire: true
    },
    {
      type: 2,
      question: 'Please select the languages you know ',
      answer: [
        {
          name: 'Typescript',
          selected: false
        },
        {
          name: 'Python',
          selected: false
        }
      ],
      isSpecify: false,
      isRequire: true
    }
  ];
  private destroyed$ = new Subject();
  constructor(
    private router: Router,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.select(StateSelectors.selectData).pipe(
      takeUntil(this.destroyed$),
    ).subscribe((res: Question[]) => {

      if(res){
        this.listQuestion = [...res];
        console.log(this.listQuestion);
      }
    });
  }

  ngOnDestroy(): void {
    // this.destroyed$.next();
    this.destroyed$.complete();
  }

  addNewQuestion(): void {
    console.log('Add new Question ');
    this.router.navigate(['form/add-new']);
    localStorage.setItem(this.KEYSTORE, this.listQuestion.toString());
    this.store.dispatch(
      StateActions.setData({
        data: this.listQuestion,
      })
    );
  }

  goToReview(): void {
    this.router.navigate(['form/answers']);
  }
}
