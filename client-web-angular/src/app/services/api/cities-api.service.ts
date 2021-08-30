import {Injectable} from '@angular/core';
import {CityModel} from '../../models/city.model';
import {httpOptions} from '../../models/app.model';
import {ApiRequestsService} from './api-requests.service';

@Injectable({
    providedIn: 'root'
})
export class CitiesApiService extends ApiRequestsService {


    getAll() {
        return this.http.get(this.resource_url('cities'));
    }

    store(data) {
        return this.http.post(this.resource_url('cities'), data, httpOptions);
    }

    get(id: number) {
        return this.http.get(this.resource_url('cities', id), httpOptions);
    }

    update(id, data) {
        return this.http.put(this.resource_url('cities', id), data, httpOptions);
    }

    delete(id: number) {
        return this.http.delete(this.resource_url('cities', id));
    }

}
