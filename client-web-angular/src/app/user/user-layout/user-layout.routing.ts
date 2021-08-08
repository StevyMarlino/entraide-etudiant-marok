import { Routes } from '@angular/router';
import { ProfileUpdateComponent } from '../components/profile-update/profile-update.component';
import { RequestsComponent } from '../components/requests/requests.component';



export const UserLayoutRoutes: Routes = [
    { 
        path: 'profil',      
        component: ProfileUpdateComponent
    },
    {
        path: 'requete',
        component: RequestsComponent
    }
];
