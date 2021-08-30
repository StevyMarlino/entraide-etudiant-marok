import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutes } from './admin.routing';
import { LbdModule } from 'modules/lbd/lbd.module';
import {DataTablesModule} from 'angular-datatables';
import {RequestsManagementComponent} from './pages/requests-page/requests-management.component';
import {UserManagementComponent} from './pages/users-page/user-management.component';
import {AdminLayoutComponent} from './admin-layout.component';
import {AppNavbarComponent} from '../app-common/components/navbar/app-navbar.component';
import {AppFooterComponent} from '../app-common/components/footer/app-footer.component';
import {AppSidebarComponent} from '../app-common/components/sidebar/app-sidebar.component';
import {AppCommonModule} from '../app-common/app-common.module';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminRoutes),
        LbdModule,
        DataTablesModule,
        AppCommonModule
    ],
  declarations: [
    AdminLayoutComponent,
    RequestsManagementComponent,
    UserManagementComponent,
  ],
})
export class AdminModule { }
