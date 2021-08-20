import {Injectable} from '@angular/core';
import {SchoolModel} from '../../models/school.model';
import {Observable} from 'rxjs';
import {httpOptions} from '../../models/app.model';
import {ApiRequestsService} from './api-requests.service';

@Injectable({
    providedIn: 'root'
})
export class SchoolsApiResourceService extends ApiRequestsService {


    store(school: SchoolModel): Observable<SchoolModel> {
        const user = this.sessionUser();
        return this.http.post<SchoolModel>(`${this.ROOT_URL}/schools/?access_token=${user.access_token}`, school, httpOptions);
    }

    getAll(): Observable<SchoolModel[]> {
        const user = this.sessionUser();
        return this.http.get<SchoolModel[]>(`${this.ROOT_URL}/schools/?access_token=${user.access_token}`);
    }
}
