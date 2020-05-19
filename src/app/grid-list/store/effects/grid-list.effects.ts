import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as GridListActions from 'src/app/grid-list/store/actions/grid-list.actions';
import { EmployeeService } from 'src/app/services/employee.service';

@Injectable()
export class GridListEffects {
  loadGridLists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GridListActions.loadGridLists),
      switchMap(() =>
        this.service.getEmployees().pipe(
          map((data) => GridListActions.loadGridListsSuccess({ data })),
          catchError((error) =>
            of(GridListActions.loadGridListsFailure({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: EmployeeService) {}
}
