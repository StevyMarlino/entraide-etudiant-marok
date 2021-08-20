import { Routes } from '@angular/router';
import {RequestsManagementComponent} from './pages/requests-page/requests-management.component';
import {UserManagementComponent} from './pages/users-page/user-management.component';

export const AdminRoutes: Routes = [
    {
        path: 'requetes',
        component: RequestsManagementComponent
    },
    {
        path: 'utilisateurs',
        component: UserManagementComponent
    },
];
