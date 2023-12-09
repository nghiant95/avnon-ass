import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnwserComponent } from './view-anwser.component';

describe('ViewAnwserComponent', () => {
  let component: ViewAnwserComponent;
  let fixture: ComponentFixture<ViewAnwserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAnwserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAnwserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
