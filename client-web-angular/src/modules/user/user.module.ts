import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {UserRoutes} from './user.routing';


import {FormsModule} from '@angular/forms';
import {ProfileUserComponent} from './components/profile-user/profile-user.component';
import {ProfileSchoolComponent} from './components/profile-school/profile-school.component';
import {ProfileCityComponent} from './components/profile-city/profile-city.component';
import {ProfileRequestComponent} from './components/profile-request/profile-request.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import {UserLayoutComponent} from './user-layout.component';
import {AppCommonModule} from '../app-common/app-common.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule,
        AppCommonModule
    ],
    declarations: [
        UserLayoutComponent,
        ProfileUserComponent,
        ProfileSchoolComponent,
        ProfileCityComponent,
        ProfileRequestComponent,
        ProfilePageComponent,
        ProfileInfoComponent,
    ]
})


export class UserModule {
}
