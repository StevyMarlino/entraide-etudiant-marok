import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RequestModel} from '../../models/request.model';
import {ApiRequestsService} from './api-requests.service';
import {httpOptions} from '../../models/app.model';

@Injectable({
    providedIn: 'root'
})
export class RequestsApiService extends ApiRequestsService {


    getAll() {
        return this.http.get(this.resource_url('requests'));
    }

    store(data) {
        return this.http.post(this.resource_url('requests'), data, httpOptions);
    }

    get(id: number) {
        return this.http.get(this.resource_url('requests', id), httpOptions);
    }

    update(id, data) {
        return this.http.put(this.resource_url('requests', id), data, httpOptions);
    }

    delete(id: number) {
        return this.http.delete(this.resource_url('requests', id));
    }
}
