import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GridListEffects } from './grid-list.effects';

describe('GridListEffects', () => {
  let actions$: Observable<any>;
  let effects: GridListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GridListEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<GridListEffects>(GridListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
