import { Routes } from '@angular/router';

import { AdminLoginComponent } from "../components/admin-login/admin-login.component";
import { LoginAndSignupComponent } from '../components/login-and-signup/login-and-signup.component';
import { NewsComponent } from '../components/news/news.component';

export const GuestLayoutRoutes: Routes = [
    { 
        path: 'admin',      
        component: AdminLoginComponent 
    },
    {
        path: 'connexion',
        component: LoginAndSignupComponent
    },
    {
        path: 'actualite',
        component: NewsComponent
    }
];
