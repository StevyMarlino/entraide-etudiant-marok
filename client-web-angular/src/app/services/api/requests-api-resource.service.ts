import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RequestModel} from '../../models/request.model';
import {ApiRequestsService} from './api-requests.service';

@Injectable({
    providedIn: 'root'
})
export class RequestsApiResourceService extends ApiRequestsService {


    getAll(): Observable<RequestModel[]> {
        const user = this.sessionUser();
        return this.http.get<RequestModel[]>(`${this.ROOT_URL}/requests/?access_token=${user.access_token}`);
    }

    store(request: RequestModel): Observable<RequestModel> {
        const user = this.sessionUser();
        return this.http.post<RequestModel>(`${this.ROOT_URL}/requests/?access_token=${user.access_token}`, request);
    }
}
