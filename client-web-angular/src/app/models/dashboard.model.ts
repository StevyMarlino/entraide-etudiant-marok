import {User} from './user';
import {City} from './city';
import {Request} from './request';
import {School} from './school';

declare interface GraphDataType {
    label: any,
    series: any
}


export class DashboardModel {
    users?: User[] = [];
    cities?: City[] = [];
    requests?: Request[] = [];
    schools?: School[] = [];
    difficulties?: any = [];
    cities_chart?: GraphDataType;
    years_chart?: GraphDataType;
    notes_chart?: GraphDataType;
}
