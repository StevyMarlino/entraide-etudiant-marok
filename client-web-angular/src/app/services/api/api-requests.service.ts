import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {httpOptions} from '../../models/app.model';
import {UserModel} from "../../models/user.model";
import {DashboardModel} from "../../models/dashboard.model";


@Injectable({
    providedIn: 'root'
})
export class ApiRequestsService {
    readonly ROOT_URL;

    constructor(protected http: HttpClient) {
        this.ROOT_URL = 'http://localhost:8000/api';
    }

    protected sessionUser(): UserModel {
        return JSON.parse(localStorage.getItem('AUTH_DATA.USER'));
    }

    /**
     * Get dashboard data
     * @param user
     */
    getDashboardData(): Observable<DashboardModel> {
        return this.http.get(`${this.ROOT_URL}/dashboard/`, httpOptions);
    }
}
