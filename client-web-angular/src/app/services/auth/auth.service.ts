import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ApiRequestsService} from '../api-requests/api-requests.service';
import {Router} from '@angular/router';
import {shareReplay, tap} from 'rxjs/operators';
import {Session} from '../../models/session';
import { User } from 'app/models/user';
import { empty } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private webService: ApiRequestsService,
        private router: Router,
        private http: HttpClient) {
    }

    logout() {
        localStorage.removeItem('AUTH_DATA');
        this.router.navigate(['/connexion']);
    }

    setData(data: any) {
        localStorage.setItem('AUTH_DATA', JSON.stringify(data));
        return JSON.parse(localStorage.getItem('AUTH_DATA'))
    }

    getUser(): User {
        const data = JSON.parse(localStorage.getItem('AUTH_DATA'));
        return data.user
    }
}
