import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBaseComponent } from './container/list-base/list-base.component';
import { ListViewComponent } from './presentationals/list-view/list-view.component';
import { Routes, RouterModule } from '@angular/router';

const listRoutes: Routes = [
  {
    path: '',
    component: ListBaseComponent
  }
];

@NgModule({
  declarations: [ListBaseComponent, ListViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(listRoutes),
  ]
})
export class GridListModule { }
