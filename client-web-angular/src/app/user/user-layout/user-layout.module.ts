import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUpdateComponent } from '../components/profile-update/profile-update.component';
import { RouterModule } from '@angular/router';

import { UserLayoutRoutes } from './user-layout.routing';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { UserLayoutComponent } from './user-layout.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule
  ],
  declarations: [
    UserLayoutComponent,
    ProfileUpdateComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ]
})


export class UserLayoutModule { }
