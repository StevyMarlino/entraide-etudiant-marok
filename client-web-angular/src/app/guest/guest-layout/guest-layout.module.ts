import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GuestLayoutRoutes } from './guest-layout.routing';

import { GuestLayoutComponent } from './guest-layout.component';
import { AdminLoginComponent } from '../components/admin-login/admin-login.component';
import { LoginAndSignupComponent } from '../components/login-and-signup/login-and-signup.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import {NewsComponent} from '../components/news/news.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GuestLayoutRoutes),
    FormsModule,
  ],
  declarations: [
    GuestLayoutComponent,
    AdminLoginComponent,
    LoginAndSignupComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
      NewsComponent
  ]
})
export class GuestLayoutModule { }
