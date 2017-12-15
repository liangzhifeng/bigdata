import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysComponent } from './sys/sys.component';
import { SysMonitorComponent } from './sys/sys-monitor/sys-monitor.component';
import { EChartOptionDirective1 } from './sys/sys-monitor/echart-option.directive';
import { PlatformComponent } from './sys/platform/platform.component';

const routes: Routes = [
  {
    path: '',
    component: SysComponent,
    children: [
      { path: '', redirectTo: 'project', pathMatch: 'full' },
      { path: 'project', component: SysMonitorComponent },
      { path: 'platform', component: PlatformComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
