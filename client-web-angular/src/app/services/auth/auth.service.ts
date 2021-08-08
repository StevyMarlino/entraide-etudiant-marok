import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {WebRequestService} from '../web-request/web-request.service';
import {Router} from '@angular/router';
import {shareReplay, tap} from 'rxjs/operators';
import {UserSessionModel} from '../../models/user_session.model';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private webService: WebRequestService, private router: Router, private http: HttpClient) {
    }

    login(email: string, password: string) {
        return this.webService.login(email, password).pipe(
            shareReplay(),
            tap((res: HttpResponse<any>) => {
                this.setSession(res);
                console.log('LOGGED IN!');
            })
        )
    }


    signup(email: string, password: string) {
        return this.webService.signup(email, password).pipe(
            shareReplay(),
            tap((res: HttpResponse<any>) => {
                this.setSession(res);
                console.log('Successfully signed up and now logged in!');
            })
        )
    }


    logout() {
        localStorage.removeItem('session');
        this.router.navigate(['/connexion']);
    }

    setSession(res: any): UserSessionModel {
        const userSession: UserSessionModel = {
            accessToken: res.body.user.access_token,
            user: {
                email: res.body.user.email,
                email_verified_at: res.body.user.email,
                id: res.body.user.email,
                name: res.body.user.email,
                password: res.body.user.email
            }
        };
        localStorage.setItem('session', JSON.stringify(userSession));
        return JSON.parse(localStorage.getItem('session'))
    }

    session(): UserSessionModel {
        return JSON.parse(localStorage.getItem('session'))
    }
}
