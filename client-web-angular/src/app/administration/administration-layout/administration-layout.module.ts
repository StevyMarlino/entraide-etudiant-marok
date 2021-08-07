import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdministrationLayoutRoutes } from './administration-layout.routing';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { RequestsManagementComponent } from '../components/requests-management/requests-management.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { UserManagementComponent } from '../components/user-management/user-management.component';
import { AdministrationLayoutComponent } from './administration-layout.component';
import { LbdModule } from 'app/shared/lbd/lbd.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdministrationLayoutRoutes),
    LbdModule
  ],
  declarations: [
    DashboardComponent,
    AdministrationLayoutComponent,
    RequestsManagementComponent,
    UserManagementComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
})
export class AdministrationLayoutModule { }
