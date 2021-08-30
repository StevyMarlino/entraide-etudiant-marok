import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {httpOptions} from '../../models/app.model';
import {UserModel} from '../../models/user.model';
import {DashboardModel} from '../../models/dashboard.model';


@Injectable({
    providedIn: 'root'
})
export class ApiRequestsService {
    readonly API_ROOT_URL;

    constructor(protected http: HttpClient) {
        this.API_ROOT_URL = 'http://localhost:8000/api';
    }

    protected resource_url(url, id?): string {
        if (id) {
            return `${this.API_ROOT_URL}/${url}/${id}/?access_token=${this.access_token}`;
        }
        return `${this.API_ROOT_URL}/${url}/?access_token=${this.access_token}`;
    }

    protected get access_token() {
        const user = this.sessionUser();
        return user.access_token;
    }

    protected sessionUser(): UserModel {
        return JSON.parse(localStorage.getItem('AUTH_DATA.USER'));
    }

    /**
     * Get dashboard data
     * @param user
     */
    getDashboardData(): Observable<DashboardModel> {
        return this.http.get(`${this.API_ROOT_URL}/dashboard/`, httpOptions);
    }
}
