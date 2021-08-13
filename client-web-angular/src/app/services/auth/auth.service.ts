import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {WebRequestService} from '../web-request/web-request.service';
import {Router} from '@angular/router';
import {shareReplay, tap} from 'rxjs/operators';
import {UserSessionModel} from '../../models/userSessionModel';
import { UserModel } from 'app/models/user.model';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private webService: WebRequestService, private router: Router, private http: HttpClient) {
    }


    logout() {
        localStorage.removeItem('AUTH_DATA');
        this.router.navigate(['/connexion']);
    }

    setData(data: any) {
        localStorage.setItem('AUTH_DATA', JSON.stringify(data));
        return JSON.parse(localStorage.getItem('AUTH_DATA'))
    }

    getUser(): UserModel {
        return JSON.parse(localStorage.getItem('AUTH_DATA')).user
    }
}
