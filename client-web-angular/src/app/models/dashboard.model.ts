import {UserModel} from './user.model';
import {CityModel} from './city.model';
import {RequestModel} from './request.model';
import {SchoolModel} from './school.model';

declare interface GraphDataType {
    label: any,
    series: any
}


export class DashboardModel {
    users?: UserModel[] = [];
    cities?: CityModel[] = [];
    requests?: RequestModel[] = [];
    schools?: SchoolModel[] = [];
    difficulties?: any = [];
    cities_chart?: GraphDataType;
    years_chart?: GraphDataType;
    notes_chart?: GraphDataType;
}
