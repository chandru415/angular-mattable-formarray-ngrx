import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGridList from '../reducers/grid-list.reducer';

export const selectGridListState = createFeatureSelector<
  fromGridList.GridState
>(fromGridList.gridListFeatureKey);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = fromGridList.gridAdapter.getSelectors(selectGridListState);

export const getGridList = selectAll;
