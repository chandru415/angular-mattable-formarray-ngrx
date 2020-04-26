import * as fromGridList from '../reducers/grid-list.reducer';
import { selectGridListState } from './grid-list.selectors';

describe('GridList Selectors', () => {
  it('should select the feature state', () => {
    const result = selectGridListState({
      [fromGridList.gridListFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
