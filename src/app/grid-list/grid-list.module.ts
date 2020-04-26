import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBaseComponent } from 'src/app/grid-list/container/list-base/list-base.component';
import { ListViewComponent } from 'src/app/grid-list/presentationals/list-view/list-view.component';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { GridListEffects } from 'src/app/grid-list/store/effects/grid-list.effects';

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
    EffectsModule.forFeature([GridListEffects]),
  ]
})
export class GridListModule { }
