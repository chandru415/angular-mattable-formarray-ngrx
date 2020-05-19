import { Component, OnInit } from '@angular/core';
import { GridState } from '../../store/reducers/grid-list.reducer';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getGridList } from '../../store/selectors/grid-list.selectors';
import { loadGridLists } from '../../store/actions/grid-list.actions';

@Component({
  selector: 'app-list-base',
  templateUrl: './list-base.component.html',
  styleUrls: ['./list-base.component.scss'],
})
export class ListBaseComponent implements OnInit {
  private alive = new Subject<void>();
  gridDataSource$: any;

  constructor(private store: Store<GridState>) {}

  ngOnInit(): void {
    this.gridDataSource$ = this.store.pipe(
      takeUntil(this.alive),
      select(getGridList)
    );

    this.store.dispatch(loadGridLists())
  }
}
