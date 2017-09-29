import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RootRouterModule } from './app.router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HelpService } from './shared/help.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { PagesModule }  from './pages/pages.module';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { TableCheckboxDirectice } from './shared/table-checkbox.directive';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { CalendarModule, AutoCompleteModule,DialogModule} from 'primeng/primeng';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppComponent} from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { ComfirmModelComponent } from './shared/modal/confirm-model/confirm-model.component';
import { ThreeLinkComponent } from './shared/three-link/three-link.component';
import { MaskComponent } from './shared/mask/mask.component';

//pipe
import { SelectContactPipe } from './shared/pipe/select-contact.pipe';
import { FormatPhonePipe } from './shared/pipe/format-phone.pipe';


import { SellerBusinessComponent } from './components/seller-business/seller-business.component';
import { AlertComponent } from './shared/alert/alert.component';

import { CanActivateGuard } from './shared/routerControl/can-activate-guard';
import { PhoneDetailsComponent } from './components/phone-details/phone-details.component';
import { SearchDetailsComponent } from './components/search-details/search-details.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MyClusterComponent } from './components/my-cluster/my-cluster.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './pages/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    BreadcrumbsComponent,
    TableCheckboxDirectice,
    ComfirmModelComponent,
    ThreeLinkComponent,
    MaskComponent,
    SellerBusinessComponent,

    AlertComponent,

    SelectContactPipe,
    FormatPhonePipe,
    IndexComponent,
    LoginComponent,
    WelcomeComponent,
    PhoneDetailsComponent,
    SearchDetailsComponent,
    MyClusterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RootRouterModule,
    // NKDatetimeModule,
    // PagesModule,
    CalendarModule,
    AutoCompleteModule,
    DialogModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, CanActivateGuard,{
    provide:'help',
    useClass:HelpService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }