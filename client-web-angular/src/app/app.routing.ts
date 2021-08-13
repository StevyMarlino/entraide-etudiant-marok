import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { UserLayoutComponent } from './user-module/user-layout/user-layout.component';
import {GuestLayoutComponent} from './guest-module/guest-layout/guest-layout.component';
import {AdminLayoutComponent} from './admin-module/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'actualite',
    pathMatch: 'full',
  },
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
        {
        path: '',
        loadChildren: './guest-module/guest.module#GuestModule'
        }
    ]
  },
  {
    path: 'utilisateur',
    component: UserLayoutComponent,
    children: [
        {
        path: '',
        loadChildren: './user-module/user.module#UserModule'
        }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
        {
        path: '',
        loadChildren: './admin-module/admin.module#AdminModule'
        }
    ]
  },
  {
    path: '**',
    redirectTo: 'actualite'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
       useHash: true
    })
  ],
  exports: [
  ],
})


export class AppRoutingModule { }
