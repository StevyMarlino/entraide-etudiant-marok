import {Injectable} from '@angular/core';
import {SchoolModel} from '../../models/school.model';
import {Observable} from 'rxjs';
import {httpOptions} from '../../models/app.model';
import {ApiRequestsService} from './api-requests.service';

@Injectable({
    providedIn: 'root'
})
export class SchoolsApiService extends ApiRequestsService {


    getAll() {
        return this.http.get(this.resource_url('schools'));
    }

    store(data) {
        return this.http.post(this.resource_url('schools'), data, httpOptions);
    }

    get(id: number) {
        return this.http.get(this.resource_url('schools', id), httpOptions);
    }

    update(id, data) {
        return this.http.put(this.resource_url('schools', id), data, httpOptions);
    }

    delete(id: number) {
        return this.http.delete(this.resource_url('schools', id));
    }
}
