import {Injectable} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {Observable} from 'rxjs';
import {ApiRequestsService} from './api-requests.service';

@Injectable({
    providedIn: 'root'
})
export class UsersApiResourceService extends ApiRequestsService {


    getAll(): Observable<UserModel[]> {
        const user = this.sessionUser();
        return this.http.get<UserModel[]>(`${this.ROOT_URL}/users/?access_token=${user.access_token}`);
    }

    store(data: UserModel): Observable<UserModel> {
        const user = this.sessionUser();
        return this.http.get<UserModel>(`${this.ROOT_URL}/user/?access_token=${user.access_token}`);
    }
}
