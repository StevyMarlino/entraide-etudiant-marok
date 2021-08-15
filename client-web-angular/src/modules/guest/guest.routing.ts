import { Routes } from '@angular/router';
import {AuthenticationPageComponent} from './pages/authentication-page/authentication-page.component';
import {NewsPageComponent} from './pages/news-page/news-page.component';
import {GuestDashboardComponent} from './pages/dashboard-page/guest-dashboard.component';


export const GuestRoutes: Routes = [
    {
        path: 'connexion',
        component: AuthenticationPageComponent
    },
    {
        path: 'actualite',
        component: NewsPageComponent
    },
    {
        path: 'tableau-de-bord',
        component: GuestDashboardComponent
    }
];
