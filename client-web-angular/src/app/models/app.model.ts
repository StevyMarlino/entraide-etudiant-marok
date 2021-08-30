import {HttpHeaders} from '@angular/common/http';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }),
};
