import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGridList from '../reducers/grid-list.reducer';

export const selectGridListState = createFeatureSelector<fromGridList.State>(
  fromGridList.gridListFeatureKey
);
