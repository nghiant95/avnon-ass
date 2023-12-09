import { createSlice, PayloadAction } from 'ngrx-slice';
import { Question } from '../model/question.model';

export interface StateState {
    data: Question[];
}

export const initialState: StateState = {
  data: [],
};

export const {
    actions: StateActions,
    selectors: StateSelectors,
    ...StateFeature
} = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<{ data: Question[] }>) {
            state.data = action.data;
        },
    },
});
