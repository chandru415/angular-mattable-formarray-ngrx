import { Action, createReducer, on } from '@ngrx/store';
import * as GridListActions from 'src/app/grid-list/store/actions/grid-list.actions'

export const gridListFeatureKey = 'gridList';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(GridListActions.loadGridLists, state => state),
  on(GridListActions.loadGridListsSuccess, (state, action) => state),
  on(GridListActions.loadGridListsFailure, (state, action) => state),

);

