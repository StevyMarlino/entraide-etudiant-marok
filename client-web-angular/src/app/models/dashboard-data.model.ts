import {UserModel} from './user.model';
import {UserCityModel} from './user-city.model';
import {UserRequestModel} from './user-request.model';
import {UserSchoolModel} from './user-school.model';

declare interface GraphDataType {
    label: any,
    series: any
}


export class DashboardDataModel {
    users?: UserModel[] = [];
    cities?: UserCityModel[] = [];
    requests?: UserRequestModel[] = [];
    schools?: UserSchoolModel[] = [];
    difficulties?: any = [];
    cities_chart?: GraphDataType;
    years_chart?: GraphDataType;
    notes_chart?: GraphDataType;
}
