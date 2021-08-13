import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutes } from './admin.routing';
import { LbdModule } from 'modules/app-common/lbd/lbd.module';
import {DataTablesModule} from 'angular-datatables';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {RequestsManagementComponent} from './pages/requests-management/requests-management.component';
import {UserManagementComponent} from './pages/user-management/user-management.component';
import {AdminNavbarComponent} from './components/navbar/admin-navbar.component';
import {AdminSidebarComponent} from './components/sidebar/admin-sidebar.component';
import {AdminFooterComponent} from './components/footer/admin-footer.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminRoutes),
        LbdModule,
        DataTablesModule
    ],
  declarations: [
    AdminLayoutComponent,
    RequestsManagementComponent,
    UserManagementComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminFooterComponent
  ],
})
export class AdminModule { }
