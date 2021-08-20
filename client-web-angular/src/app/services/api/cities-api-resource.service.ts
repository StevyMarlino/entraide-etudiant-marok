import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CityModel} from '../../models/city.model';
import {httpOptions} from '../../models/app.model';
import {ApiRequestsService} from './api-requests.service';

@Injectable({
    providedIn: 'root'
})
export class CitiesApiResourceService extends ApiRequestsService {


    getAll(): Observable<CityModel[]> {
        const user = this.sessionUser();
        return this.http.get<CityModel[]>(`${this.ROOT_URL}/cities/?access_token=${user.access_token}`);
    }

    store(city: CityModel): Observable<CityModel> {
        const user = this.sessionUser();
        return this.http.post<CityModel>(`${this.ROOT_URL}/city/?access_token=${user.access_token}`, city, httpOptions);
    }

}
