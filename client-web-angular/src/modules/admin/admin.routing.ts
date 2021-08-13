import { Routes } from '@angular/router';
import {RequestsManagementComponent} from './pages/requests-management/requests-management.component';
import {UserManagementComponent} from './pages/user-management/user-management.component';



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
