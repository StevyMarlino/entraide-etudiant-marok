import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiErrorAlertComponent} from './components/api-error-alert/api-error-alert.component';
import {AppFooterComponent} from './components/footer/app-footer.component';
import {LoaderComponent} from './components/loader/loader.component';
import {AppNavbarComponent} from './components/navbar/app-navbar.component';
import {AppSidebarComponent} from './components/sidebar/app-sidebar.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ApiErrorAlertComponent,
    AppFooterComponent,
    LoaderComponent,
    AppNavbarComponent,
    AppSidebarComponent
  ],
  exports: [
    ApiErrorAlertComponent,
    LoaderComponent,
    AppNavbarComponent,
    AppSidebarComponent,
    AppFooterComponent
  ],
  imports: [
    CommonModule,
      RouterModule
  ]
})
export class AppCommonModule { }
