import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from 'app/models/user';
import {City} from 'app/models/city';
import {Observable} from 'rxjs';
import {Request} from '../../models/request';
import {School} from '../../models/school';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }),
}

@Injectable({
    providedIn: 'root'
})
export class ApiRequestsService {
    readonly ROOT_URL;

    constructor(private http: HttpClient) {
        this.ROOT_URL = 'http://localhost:8000/api';
    }

    /**
     * Login user
     * @param user
     */
    login(user: User): Observable<any> {
        return this.http.post(`${this.ROOT_URL}/login`, {
            email: user.email,
            password: user.password
        }, httpOptions);
    }

    /**
     * register an user
     * @param user
     */
    register(user: User): Observable<any> {
        return this.http.post(`${this.ROOT_URL}/register`, user, httpOptions);
    }

    /**
     * Get all cities
     * @param user
     */
    getCities(user: User,): Observable<any> {
        return this.http.get(`${this.ROOT_URL}/cities/?access_token=${user.access_token}`);
    }

    /**
     * Store new city
     * @param user
     * @param city
     */
    postCity(user: User, city: City): Observable<any> {
        return this.http.post(`${this.ROOT_URL}/city/?access_token=${user.access_token}`, city, httpOptions);
    }

    /**
     * Get dashboard data
     * @param user
     */
    getDashboardData(): Observable<any> {
        return this.http.get(`${this.ROOT_URL}/dashboard/`, httpOptions);
    }

    /**
     *
     * @param user
     * @param userRequest
     */
    postUserRequest(user: User, userRequest: Request): Observable<any> {
        return this.http.post(`${this.ROOT_URL}/request/?access_token=${user.access_token}`, userRequest, httpOptions);
    }

    /**
     * Store new school
     * @param user
     * @param school
     */
    postSchool(user: User, school: School): Observable<any> {
        return this.http.post(`${this.ROOT_URL}/schools/?access_token=${user.access_token}`, user, httpOptions);
    }

    /**
     * All schools
     * @param user
     */
    getSchools(user: User): Observable<any> {
        return this.http.get(`${this.ROOT_URL}/schools/?access_token=${user.access_token}`);
    }

    /**
     * use from API Token
     * @param user
     */
    postUser(user: User): Observable<any> {
        return this.http.get(`${this.ROOT_URL}/user/?access_token=${user.access_token}`);
    }

    /**
     * All users
     * @param user
     */
    getUsers(user: User): Observable<any> {
        return this.http.get(`${this.ROOT_URL}/users/?access_token=${user.access_token}`);
    }

    /**
     * All requests
     * @param user
     */
    getRequests(user: User): Observable<any> {
        return this.http.get(`${this.ROOT_URL}/requests/?access_token=${user.access_token}`);
    }

    /**
     * Post request
     * @param user
     * @param request
     */
    postRequest(user: User, request: Request): Observable<any> {
        return this.http.post(`${this.ROOT_URL}/requests/?access_token=${user.access_token}`, request);
    }
}
