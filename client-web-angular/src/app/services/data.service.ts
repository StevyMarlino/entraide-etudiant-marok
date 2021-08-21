import {Injectable} from '@angular/core';
import {RouteInfo} from "../models/app.model";
import {UserBrowserSessionService} from "./user-browser-session.service";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private userSession: UserBrowserSessionService) {
    }

    public ROUTES(): RouteInfo[] {
        if (this.userSession.check()) {
            return [
                {path: '/actualite', title: 'Actualité', icon: 'pe-7s-news-paper', class: ''},
                {path: '/tableau-de-bord', title: 'Tableau-de-board', icon: 'fa fa-dashboard', class: ''},
                {path: '/connexion', title: 'Compte', icon: 'fa fa-user', class: ''},
            ];
        }
        const user = this.userSession.user;
        if (user.role === 'etudiant') {
            return [
                {path: '/actualite', title: 'Actualité', icon: 'pe-7s-news-paper', class: ''},
                {path: '/tableau-de-bord', title: 'Tableau-de-board', icon: 'fa fa-dashboard', class: ''},
                {path: '/utilisateur/profile', title: 'Compte', icon: 'fa fa-user', class: ''},
            ];
        } else if (user.role === 'admin') {
            return [
                {path: '/actualite', title: 'Actualité', icon: 'pe-7s-news-paper', class: ''},
                {path: '/tableau-de-bord', title: 'Tableau-de-board', icon: 'fa fa-dashboard', class: ''},
                {path: '/administrateur/utilisateurs', title: 'Utilisateurs', icon: 'fa fa-user', class: ''},
            ];
        }
    }
}
