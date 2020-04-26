import * as fromGridList from 'src/app/grid-list/store/actions/grid-list.actions';

describe('loadGridLists', () => {
  it('should return an action', () => {
    expect(fromGridList.loadGridLists().type).toBe('[GridList] Load GridLists');
  });
});
