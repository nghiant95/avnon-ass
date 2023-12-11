import { Component, OnDestroy, OnInit } from '@angular/core';
import { Answer, Question } from '../model/question.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StateActions, StateSelectors } from '../state/state.state';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector   : 'app-main-view',
    templateUrl: './main-view.component.html',
    styleUrls  : ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit, OnDestroy {

    KEYSTORE = 'DATA';
    listQuestion: Question[] = [];
    private destroyed$ = new Subject();

    constructor(
        private router: Router,
        private store: Store,
    ) {
    }

    ngOnInit(): void {
        this.store.select(StateSelectors.selectData).pipe(
            takeUntil(this.destroyed$),
        ).subscribe((res: Question[]) => {

            if (res) {
                this.listQuestion.length = 0;
                res.forEach(x => {
                    this.listQuestion.push(JSON.parse(JSON.stringify(x)));
                });
            }
        });
    }

    ngOnDestroy(): void {
        // this.destroyed$.next();
        this.destroyed$.complete();
    }

    addNewQuestion(): void {
        console.log('Add new Question ');
        this.store.dispatch(
            StateActions.setData({
                data: [...this.listQuestion],
            })
        );
        this.router.navigate(['form/add-new']);
    }

    changeCheckboxAns(ans: Answer, ques: Question): void {
        console.log(ans);
        console.log(ques);
        if (ans.name === 'Other' || ans.name === 'other') {
            ques.otherSelected = ans.selected;
        }
    }

    goToReview(): void {
        this.store.dispatch(
            StateActions.setData({
                data: [...this.listQuestion],
            })
        );
        this.router.navigate(['form/answers']);
    }
}
