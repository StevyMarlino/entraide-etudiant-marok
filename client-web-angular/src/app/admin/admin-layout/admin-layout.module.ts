import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../shared/lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../components/home/home.component';
import { UserComponent } from '../components/user/user.component';
import { TablesComponent } from '../components/tables/tables.component';
import { TypographyComponent } from '../components/typography/typography.component';
import { IconsComponent } from '../components/icons/icons.component';
import { MapsComponent } from '../components/maps/maps.component';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { UpgradeComponent } from '../components/upgrade/upgrade.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent
  ]
})

export class AdminLayoutModule {}
