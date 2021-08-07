import { Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { UserComponent } from '../components/user/user.component';
import { TablesComponent } from '../components/tables/tables.component';
import { TypographyComponent } from '../components/typography/typography.component';
import { IconsComponent } from '../components/icons/icons.component';
import { MapsComponent } from '../components/maps/maps.component';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { UpgradeComponent } from '../components/upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { 
        path: 'dashboard',      
        component: HomeComponent 
    },
    { 
        path: 'user',           
        component: UserComponent 
    },
    { 
        path: 'table',          
        component: TablesComponent 
    },
    {

        path: 'typography',     
        component: TypographyComponent 
    },
    { 
        path: 'icons',          
        component: IconsComponent 
    },
    { 
        path: 'maps',           
        component: MapsComponent 
    },
    { 
        path: 'notifications',  
        component: NotificationsComponent 
    },
    { 
        path: 'upgrade',        
        component: UpgradeComponent 
    },
];
