import {Injectable} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {Observable} from 'rxjs';
import {ApiRequestsService} from './api-requests.service';
import {httpOptions} from '../../models/app.model';

@Injectable({
    providedIn: 'root'
})
export class UsersApiService extends ApiRequestsService {


    getAll() {
        return this.http.get(this.resource_url('users'));
    }

    store(data: UserModel) {
        console.log(data);
        return this.http.post(this.resource_url('users'), data, httpOptions);
    }

    get(id: number) {
        return this.http.get(this.resource_url('users', id), httpOptions);
    }

    update(id, data: UserModel) {
        return this.http.put(this.resource_url('users', id), data, httpOptions);
    }

    delete(id: number) {
        return this.http.delete(this.resource_url('users', id));
    }
}
