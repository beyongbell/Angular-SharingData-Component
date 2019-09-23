import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ViewParentComponent } from './view-parent/view-parent.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  },
  {
    path: 'view',
    component: ViewParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
