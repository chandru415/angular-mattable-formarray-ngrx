import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBaseComponent } from './list-base.component';

describe('ListBaseComponent', () => {
  let component: ListBaseComponent;
  let fixture: ComponentFixture<ListBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
