import {Component, OnInit} from '@angular/core';
import {UserBrowserSessionService} from 'app/services/user-browser-session.service';
import {CityModel} from '../../../../app/models/city.model';
import {CitiesApiService} from '../../../../app/services/api/cities-api.service';
import {ApiErrorHandlerService} from '../../../../app/services/api-error-handler.service';

@Component({
    selector: 'app-profile-city',
    templateUrl: './profile-city.component.html',
    styleUrls: ['./profile-city.component.css']
})
export class ProfileCityComponent implements OnInit {

    cities: CityModel[];

    city: CityModel = new CityModel();

    constructor(
        private citiesApi: CitiesApiService,
        private errorAlert: ApiErrorHandlerService
    ) {
    }

    ngOnInit(): void {
        this.citiesApi.getAll()
            .subscribe((cities: any) => {
                this.cities = cities
            });
    }

    handleSubmit(): void {
    }

}
