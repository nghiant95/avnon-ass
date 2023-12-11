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

  listQuestion: Question[] = [];

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
      }
    });
  }

  ngOnDestroy(): void {
    // this.destroyed$.next();
    this.destroyed$.complete();
  }

  goToBack(): void {
    this.router.navigate(['form/builder']);
  }
}
