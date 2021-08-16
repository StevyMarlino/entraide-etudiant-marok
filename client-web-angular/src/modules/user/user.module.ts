import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {UserRoutes} from './user.routing';


import {FormsModule} from '@angular/forms';
import {ProfileParametersPageUserFormComponent} from './components/profile-parameters/profile-parameters-page-user-form/profile-parameters-page-user-form.component';
import {ProfileParametersPageSchoolFormComponent} from './components/profile-parameters/profile-parameters-page-school-form/profile-parameters-page-school-form.component';
import {ProfileParametersPageCityFormComponent} from './components/profile-parameters/profile-parameters-page-city-form/profile-parameters-page-city-form.component';
import {ProfileParametersPageRequestFormComponent} from './components/profile-parameters/profile-parameters-page-request-form/profile-parameters-page-request-form.component';
import {ProfileParametersPageComponent} from './pages/profile-parameters-page/profile-parameters-page.component';
import {UserLayoutComponent} from './user-layout/user-layout.component';
import {UserNavbarComponent} from './components/navbar/user-navbar.component';
import {UserSidebarComponent} from './components/sidebar/user-sidebar.component';
import {UserFooterComponent} from './components/footer/user-footer.component';
import { ProfileParametersPageInfoCardComponent } from './components/profile-parameters/profile-parameters-page-info-card/profile-parameters-page-info-card.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule
    ],
    declarations: [
        UserLayoutComponent,
        UserNavbarComponent,
        UserSidebarComponent,
        UserFooterComponent,
        ProfileParametersPageUserFormComponent,
        ProfileParametersPageSchoolFormComponent,
        ProfileParametersPageCityFormComponent,
        ProfileParametersPageRequestFormComponent,
        ProfileParametersPageComponent,
        ProfileParametersPageInfoCardComponent
    ]
})


export class UserModule {
}
