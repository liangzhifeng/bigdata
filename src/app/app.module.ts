import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TabsModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SysComponent } from './sys/sys.component';
import { SysMonitorComponent } from './sys/sys-monitor/sys-monitor.component';
import { EChartOptionDirective1 } from './sys/sys-monitor/echart-option.directive';
import { PlatformComponent } from './sys/platform/platform.component';
import { LoginComponent } from './login/login.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    EChartOptionDirective1,
    SysComponent,
    SysMonitorComponent,
    AppComponent,
    PlatformComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabsModule.forRoot(),
    AppRoutingModule,
    NgZorroAntdModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
