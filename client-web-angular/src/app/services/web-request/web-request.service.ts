import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from 'app/models/user.model';

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

    login(user: UserModel) {
        return this.http.post(`${this.ROOT_URL}/users/login`, {
            email: user.email,
            password: user.password
        }, httpOptions);
    }

    register(user: UserModel) {
        return this.http.post(`${this.ROOT_URL}/register`, user, httpOptions);
    }

    cities(user: UserModel) {
        return this.http.post(`${this.ROOT_URL}/register`, user, httpOptions);
    }

    city(user: UserModel) {
        return this.http.post(`${this.ROOT_URL}/register`, user, httpOptions);
    }

    dashboardData(user: UserModel) {
        return this.http.post(`${this.ROOT_URL}/register`, user, httpOptions);
    }

    userRequest(user: UserModel) {
        return this.http.post(`${this.ROOT_URL}/register`, user, httpOptions);
    }

    school(user: UserModel) {
        return this.http.post(`${this.ROOT_URL}/register`, user, httpOptions);
    }

    schools(user: UserModel) {
        return this.http.post(`${this.ROOT_URL}/register`, user, httpOptions);
    }

    user(user: UserModel) {
        return this.http.post(`${this.ROOT_URL}/register`, user, httpOptions);
    }

    users(user: UserModel) {
        return this.http.post(`${this.ROOT_URL}/register`, user, httpOptions);
    }
}
