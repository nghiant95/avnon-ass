import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StateFeature } from './state.state';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature(StateFeature)],
})
export class StateModule { }

