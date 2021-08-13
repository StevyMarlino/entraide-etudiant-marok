import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {GuestRoutes} from './guest.routing';
import {GuestLayoutComponent} from './guest-layout/guest-layout.component';
import {GuestNavbarComponent} from './components/navbar/guest-navbar.component';
import {GuestSidebarComponent} from './components/sidebar/guest-sidebar.component';
import {GuestFooterComponent} from './components/footer/guest-footer.component';
import {NewsPageComponent} from './pages/news-page/news-page.component';
import {AuthenticationPageComponent} from './pages/authentication-page/authentication-page.component';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {GuestDashboardComponent} from './pages/dashboard/guest-dashboard.component';
import {LbdModule} from '../shared/lbd/lbd.module';
import {HttpErrorsComponent} from '../components/http-errors/http-errors.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GuestRoutes),
        FormsModule,
        LbdModule
    ],
    declarations: [
        GuestLayoutComponent,
        GuestNavbarComponent,
        GuestSidebarComponent,
        GuestFooterComponent,
        NewsPageComponent,
        AuthenticationPageComponent,
        RegistrationFormComponent,
        LoginFormComponent,
        GuestDashboardComponent,
        HttpErrorsComponent
    ],
})


export class GuestModule { }
