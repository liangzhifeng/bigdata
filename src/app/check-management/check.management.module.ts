import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TabsModule } from 'ng2-bootstrap';
import {CheckManagementComponent} from './check-management.component';
import { CheckOverviewComponent } from './check-overview/check-overview.component'
import { CheckManagementRouting } from './check.management.routing'
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { EChartOptionDirective1 } from './echart-option.directive';
@NgModule({
  declarations: [
    CheckManagementComponent,
    CheckOverviewComponent,
    EChartOptionDirective1
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    TabsModule.forRoot(),
    NgZorroAntdModule.forRoot(),
    CheckManagementRouting

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class checkManagementModule { }
