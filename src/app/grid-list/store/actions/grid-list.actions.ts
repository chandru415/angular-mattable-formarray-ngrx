import { createAction, props } from '@ngrx/store';

export const loadGridLists = createAction(
  '[GridList] Load GridLists'
);

export const loadGridListsSuccess = createAction(
  '[GridList] Load GridLists Success',
  props<{ data: any }>()
);

export const loadGridListsFailure = createAction(
  '[GridList] Load GridLists Failure',
  props<{ error: any }>()
);
