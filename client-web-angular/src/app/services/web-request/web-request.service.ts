import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from 'app/models/user.model';
import { UserCityModel } from 'app/models/user-city.model';
import { Observable } from 'rxjs';
import {UserRequestModel} from '../../models/user-request.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }),
}

@Injectable({
    providedIn: 'root'
})
export class WebRequestService {
    readonly ROOT_URL;

    constructor(private http: HttpClient) {
        this.ROOT_URL = 'http://localhost:8000/api';
    }

    /**
     * Login user
     * @param user
     */
    login(user: UserModel):  Observable<any> {
        return this.http.post(`${this.ROOT_URL}/users/login`, {
            email: user.email,
            password: user.password
        }, httpOptions);
    }

    /**
     * register an user
     * @param user
     */
    register(user: UserModel):  Observable<any>  {
        return this.http.post(`${this.ROOT_URL}/register`, user, httpOptions);
    }

    /**
     * Get all cities
     * @param user
     */
    getCities(user: UserModel, ): Observable<any> {
        return this.http.get(`${this.ROOT_URL}/cities/?access_token=${user.access_token}`);
    }

    /**
     * Store new city
     * @param user
     * @param city
     */
    postCity(user: UserModel, city: UserCityModel):  Observable<any>  {
        return this.http.post(`${this.ROOT_URL}/city/?access_token=${user.access_token}`, city, httpOptions);
    }

    /**
     * Get dashboard data
     * @param user
     */
    getDashboardData():  Observable<any>  {
        return this.http.get(`${this.ROOT_URL}/dashboard/`, httpOptions);
    }

    /**
     *
     * @param user
     * @param userRequest
     */
    postUserRequest(user: UserModel, userRequest: UserRequestModel):  Observable<any>  {
        return this.http.post(`${this.ROOT_URL}/request/?access_token=${user.access_token}`, userRequest, httpOptions);
    }

    /**
     * Store new school
     * @param user
     */
    postCchool(user: UserModel):  Observable<any>  {
        return this.http.post(`${this.ROOT_URL}/schools/?access_token=${user.access_token}`, user, httpOptions);
    }

    /**
     * All schools
     * @param user
     */
    getSchools(user: UserModel):  Observable<any>  {
        return this.http.get(`${this.ROOT_URL}/schools/?access_token=${user.access_token}`);
    }

    /**
     * use from API Token
     * @param user
     */
    postUser(user: UserModel):  Observable<any>  {
        return this.http.get(`${this.ROOT_URL}/user/?access_token=${user.access_token}`);
    }

    /**
     * All users
     * @param user
     */
    getUsers(user: UserModel):  Observable<any>  {
        return this.http.get(`${this.ROOT_URL}/users/?access_token=${user.access_token}`);
    }
}
