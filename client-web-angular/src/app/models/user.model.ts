import { CityModel } from './city.model';
import { SchoolModel } from './school.model';

export class UserModel {
    id?: string;
    name?: string;
    email?: string;
    email_verified_at?: string;
    password?: string;
    password_confirmation?: string;
    last_name?: string;
    family_name?: string;
    born_at?: any;
    gender?: string;
    phone?: string;
    avatar?: any;
    access_token ?: string;
    role ?: string;
    school_id ?: string;
    city_id ?: string;
    school_registration_date ?: string;
    facebook_url ?: string;
    tweeter_url ?: string;
    cover ?: any ;
}
