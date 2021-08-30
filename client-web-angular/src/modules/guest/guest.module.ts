import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {GuestRoutes} from './guest.routing';
import {NewsPageComponent} from './pages/news-page/news-page.component';
import {AuthenticationPageComponent} from './pages/authentication-page/authentication-page.component';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {GuestDashboardComponent} from './pages/dashboard-page/guest-dashboard.component';
import {LbdModule} from '../lbd/lbd.module';
import {ApiErrorAlertComponent} from '../app-common/components/api-error-alert/api-error-alert.component';
import {GuestLayoutComponent} from './guest-layout.component';
import {AppNavbarComponent} from '../app-common/components/navbar/app-navbar.component';
import {AppSidebarComponent} from '../app-common/components/sidebar/app-sidebar.component';
import {AppFooterComponent} from '../app-common/components/footer/app-footer.component';
import {ChartsPieStudentsCitiesComponent} from './components/charts-pie-students-cities/charts-pie-students-cities.component';
import {ChartsAreaStudentsYearsComponent} from './components/charts-area-students-years/charts-area-students-years.component';
import {ChartsModule} from 'ng2-charts';
import {ChartsBarStudentsSchoolsComponent} from './components/charts-bar-students-schools/charts-bar-students-schools.component';
import {AppCommonModule} from '../app-common/app-common.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GuestRoutes),
        FormsModule,
        LbdModule,
        ChartsModule,
        AppCommonModule,

    ],
    declarations: [
        GuestLayoutComponent,
        NewsPageComponent,
        AuthenticationPageComponent,
        RegistrationFormComponent,
        LoginFormComponent,
        GuestDashboardComponent,
        ChartsPieStudentsCitiesComponent,
        ChartsAreaStudentsYearsComponent,
        ChartsBarStudentsSchoolsComponent,
        ChartsAreaStudentsYearsComponent,
    ]
})

export class GuestModule { }
