import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckManagementComponent} from './check-management.component'
import { CheckOverviewComponent } from './check-overview/check-overview.component'

const routes: Routes = [
  {
    path: '',
    component: CheckManagementComponent,
    children: [
      {
        path: 'check-overview',
        component: CheckOverviewComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckManagementRouting { }
