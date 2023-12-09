import { Component, OnDestroy, OnInit } from '@angular/core';
import { Question } from '../model/question.model';
import { Router } from '@angular/router';
import { StateSelectors } from '../state/state.state';
import { Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-view-anwser',
  templateUrl: './view-anwser.component.html',
  styleUrls: ['./view-anwser.component.scss']
})
export class ViewAnwserComponent implements OnInit, OnDestroy {

  listQuestion: Question[] = [
    {
      type: 1,
      question: 'Please tell us about yourself',
      answer: [
        {
          name: 'wdqweqwe qw erq werqw erqw er qwe',
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
          selected: true
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
    ).subscribe((res) => {
      console.log(res);
      if(res){
        this.listQuestion = [...res];
      }
    });
  }

  ngOnDestroy(): void {
    // this.destroyed$.next();
    this.destroyed$.complete();
  }

  goToBack(): void {
    console.log('goToBack');
    this.router.navigate(['form/builder']);
  }
}
