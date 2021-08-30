import {Injectable} from '@angular/core';
import {RouteInfo} from '../models/app.model';
import {UserBrowserSessionService} from './user-browser-session.service';
import {UserModel} from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private userSession: UserBrowserSessionService) {
    }

    public ROUTES(): RouteInfo[] {
        const user = new UserModel();
        this.userSession.getUser();
        if (user.role === 'etudiant') {
            return [
                {path: '/actualite', title: 'Actualité', icon: 'pe-7s-news-paper', class: ''},
                {path: '/tableau-de-bord', title: 'Tableau-de-board', icon: 'fa fa-dashboard', class: ''},
                {path: '/utilisateur/profil', title: 'Compte', icon: 'fa fa-user', class: ''},
            ];
        } else if (user.role === 'admin') {
            return [
                {path: '/actualite', title: 'Actualité', icon: 'pe-7s-news-paper', class: ''},
                {path: '/tableau-de-bord', title: 'Tableau-de-board', icon: 'fa fa-dashboard', class: ''},
                {path: '/administrateur/utilisateurs', title: 'Utilisateurs', icon: 'fa fa-user', class: ''},
            ];
        }
        return [
            {path: '/actualite', title: 'Actualité', icon: 'pe-7s-news-paper', class: ''},
            {path: '/tableau-de-bord', title: 'Tableau-de-board', icon: 'fa fa-dashboard', class: ''},
            {path: '/connexion', title: 'Compte', icon: 'fa fa-user', class: ''},
        ];
    }
}
