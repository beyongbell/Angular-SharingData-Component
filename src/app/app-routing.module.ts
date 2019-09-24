import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { DataParentComponent } from './data-parent/data-parent.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  },
  {
    path: 'view',
    component: ViewParentComponent
  },
  {
    path: 'data',
    component: DataParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
