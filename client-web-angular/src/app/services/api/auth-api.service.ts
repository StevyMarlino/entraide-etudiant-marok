import { Injectable } from '@angular/core';
import {UserModel} from '../../models/user.model';
import {Observable} from 'rxjs';
import {httpOptions} from '../../models/app.model';
import {ApiRequestsService} from './api-requests.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends ApiRequestsService {
  /**
   * Login user
   * @param user
   */
  login(user: UserModel): Observable<any> {
    return this.http.post(`${this.API_ROOT_URL}/login`, {
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  /**
   * register an user
   * @param user
   */
  register(user: UserModel): Observable<any> {
    return this.http.post(`${this.API_ROOT_URL}/register`, user, httpOptions);
  }
}
