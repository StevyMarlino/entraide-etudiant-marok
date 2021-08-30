import {Injectable} from '@angular/core';
import {ApiRequestsService} from './api/api-requests.service';
import {Router} from '@angular/router';
import {UserModel} from 'app/models/user.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserBrowserSessionService {

    userSubject: Subject<UserModel> = new Subject<UserModel>();

    constructor(
        private webService: ApiRequestsService,
        private router: Router
    ) {
    }

    setUser(user: UserModel) {
        localStorage.setItem('AUTH_DATA.USER', JSON.stringify(user));
        this.userSubject.next(user);
    }

    getUser(): UserModel {
        return JSON.parse(localStorage.getItem('AUTH_DATA.USER'));
    }

    getUserObserver(): Observable<UserModel> {
        return this.userSubject.asObservable();
    }

    check(): boolean {
        return JSON.parse(localStorage.getItem('AUTH_DATA.USER')) !== null;
    }

    logout() {
        localStorage.removeItem('AUTH_DATA.USER');
        this.router.navigate(['/connexion']);
    }
}
