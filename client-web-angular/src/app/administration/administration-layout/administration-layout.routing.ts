import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { RequestsManagementComponent } from '../components/requests-management/requests-management.component';
import { UserManagementComponent } from '../components/user-management/user-management.component';


export const AdministrationLayoutRoutes: Routes = [
    { 
        path: 'dashboard',        
        component: DashboardComponent 
    },
    { 
        path: 'requetes',        
        component: RequestsManagementComponent 
    },
    { 
        path: 'utilisateurs',        
        component: UserManagementComponent 
    },
];
