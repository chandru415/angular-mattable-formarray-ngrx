import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/models/employee';

export const loadGridLists = createAction(
  '[GridList] Load GridLists'
);

export const loadGridListsSuccess = createAction(
  '[GridList] Load GridLists Success',
  props<{ data: Employee[] }>()
);

export const loadGridListsFailure = createAction(
  '[GridList] Load GridLists Failure',
  props<{ error: any }>()
);
