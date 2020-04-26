import * as fromGridList from './grid-list.actions';

describe('loadGridLists', () => {
  it('should return an action', () => {
    expect(fromGridList.loadGridLists().type).toBe('[GridList] Load GridLists');
  });
});
