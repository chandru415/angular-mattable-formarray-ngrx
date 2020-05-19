import { Component, OnInit } from '@angular/core';
import { GridState } from '../../store/reducers/grid-list.reducer';
import { Store, select } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { getGridList } from '../../store/selectors/grid-list.selectors';
import { loadGridLists } from '../../store/actions/grid-list.actions';
import { buildFormGroup } from 'src/app/models/employee-list';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-list-base',
  templateUrl: './list-base.component.html',
  styleUrls: ['./list-base.component.scss'],
})
export class ListBaseComponent implements OnInit {
  private alive = new Subject<void>();
  gridDataSource$: Observable<FormArray>;

  constructor(private store: Store<GridState>) {}

  ngOnInit(): void {
    this.gridDataSource$ = this.store.pipe(
      takeUntil(this.alive),
      select(getGridList),
      map(employess => new FormArray(employess.map(buildFormGroup)))
    );

    this.store.dispatch(loadGridLists())
  }
}
