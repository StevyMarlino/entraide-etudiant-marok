import { CityModel } from "./city.model";
import { SchoolModel } from "./school.model";

export class UserModel {
    id?: string;
    name?: string;
    email?: string;
    email_verified_at?: string;
    password?: string;
    password_confirmation?: string;
    last_name?: string;
    family_name?: string;
    born_at?: string;
    gender?: string;
    phone?: string;
    avatar?: string;
    avatar_file?: string;
    access_token ?: string;
    role ?: string;
    school_id ?: string;
    city_id ?: string;
    school_registration_date ?: string;
}
