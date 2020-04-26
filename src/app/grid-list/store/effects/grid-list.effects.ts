import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as GridListActions from '../actions/grid-list.actions';



@Injectable()
export class GridListEffects {

  loadGridLists$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(GridListActions.loadGridLists),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => GridListActions.loadGridListsSuccess({ data })),
          catchError(error => of(GridListActions.loadGridListsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
