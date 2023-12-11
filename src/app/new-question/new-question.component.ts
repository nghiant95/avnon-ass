import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Answer, Question } from '../model/question.model';
import { Store } from '@ngrx/store';
import { map, Subject, takeUntil } from 'rxjs';
import { StateActions, StateSelectors } from '../state/state.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit, OnDestroy {

  listQuestion: Question[] = [];
  form!: FormGroup;
  listAnswer: Answer[]=[];

  private destroyed$ = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.store.select(StateSelectors.selectData).pipe(
      takeUntil(this.destroyed$),
    ).subscribe((res) => {
      if(res){
        this.listQuestion = [...res];
      }
    });
  }

  ngOnDestroy(): void {
    // this.destroyed$.next();
    this.destroyed$.complete();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      type : [1, Validators.required],
      question: ['', Validators.required],
      answer: [null],
      isSpecify  : [false],
      isRequire  : [false],
    });
    this.addNewAnser();
  }

  addNewAnser(): void {
    this.listAnswer.push({
      selected: false,
      name: ''
    });
  }

  onSubmit():void {
    if (this.form.invalid) {
      return;
    }

    this.form.get('type')?.setValue(Number(this.form.get('type')?.value) );
    this.form.get('answer')?.setValue(this.listAnswer);

    this.listQuestion.push(this.form.value);
    this.store.dispatch(
      StateActions.setData({
        data: this.listQuestion,
      })
    );
    this.goToBack();
  }

  goToBack(): void {
    this.router.navigate(['form/builder']);
  }
}
