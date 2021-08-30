import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {GuestLayoutComponent} from '../modules/guest/guest-layout.component';
import {UserLayoutComponent} from '../modules/user/user-layout.component';
import {AdminLayoutComponent} from '../modules/admin/admin-layout.component';

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
        loadChildren: '../modules/guest/guest.module#GuestModule'
        }
    ]
  },
  {
    path: 'utilisateur',
    component: UserLayoutComponent,
    children: [
        {
        path: '',
        loadChildren: '../modules/user/user.module#UserModule'
        }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
        {
        path: '',
        loadChildren: '../modules/admin/admin.module#AdminModule'
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
