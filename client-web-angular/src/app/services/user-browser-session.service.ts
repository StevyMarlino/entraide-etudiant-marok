import {Injectable} from '@angular/core';
import {ApiRequestsService} from './api/api-requests.service';
import {Router} from '@angular/router';
import {UserModel} from 'app/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserBrowserSessionService {

    _user: UserModel;

    demo: UserModel;

    constructor(
        private webService: ApiRequestsService,
        private router: Router) {
    }

    set user(user: UserModel) {
        this._user = user;
        localStorage.setItem('AUTH_DATA.USER', JSON.stringify(this._user));
    }

    get user(): UserModel {
        this._user = JSON.parse(localStorage.getItem('AUTH_DATA.USER'));
        return  this._user
    }

    check(): boolean {
       return (this._user && this._user.id) ? true : false;
    }

    logout() {
        localStorage.removeItem('AUTH_DATA.USER');
        this.router.navigate(['/connexion']);
    }
}
