import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { GuestLayoutComponent } from './guest/guest-layout/guest-layout.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { AdministrationLayoutComponent } from './administration/administration-layout/administration-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'actualite',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
        path: '',
        loadChildren: './admin/admin-layout/admin-layout.module#AdminLayoutModule'
        }
    ]
  },
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
        {
        path: '',
        loadChildren: () =>
            import('./guest/guest-layout/guest-layout.module')
            .then(m => m.GuestLayoutModule)
        }
    ]
  },
  {
    path: 'utilisateur',
    component: UserLayoutComponent,
    children: [
        {
        path: '',
        loadChildren: () =>
              import('./user/user-layout/user-layout.module')
              .then(m => m.UserLayoutModule)
        }
    ]
  },
  {
    path: 'admin',
    component: AdministrationLayoutComponent,
    children: [
        {
        path: '',
        loadChildren: './administration/administration-layout/administration-layout.module#AdministrationLayoutModule'
        }
    ]
  },
  {
    path: '**',
    redirectTo: 'non-authentifie/connexion'
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
