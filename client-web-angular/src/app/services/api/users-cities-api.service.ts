import {Injectable} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {Observable} from 'rxjs';
import {ApiRequestsService} from './api-requests.service';
import {httpOptions} from '../../models/app.model';

@Injectable({
    providedIn: 'root'
})
export class UsersCitiesApiService extends ApiRequestsService {


    getAll() {
        return this.http.get(this.resource_url('users/cities'));
    }

    store(data) {
        return this.http.post(this.resource_url('users/cities'), data, httpOptions);
    }

    get(id: number) {
        return this.http.get(this.resource_url('users/cities', id), httpOptions);
    }

    update(id, data) {
        return this.http.put(this.resource_url('users/cities', id), data, httpOptions);
    }

    delete(id: number) {
        return this.http.delete(this.resource_url('users/cities', id));
    }
}
