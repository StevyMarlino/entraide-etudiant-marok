import {UserModel} from './user.model';
import {UserCityModel} from './user-city.model';
import {UserRequestModel} from './user-request.model';
import {UserSchoolModel} from './user-school.model';

export class DashboardDataModel {
    users?: UserModel[];
    cities?: UserCityModel[];
    requests?: UserRequestModel[];
    schools?: UserSchoolModel[];
    difficulties?: any
}
