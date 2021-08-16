import {Component, OnInit} from '@angular/core';
import {AuthService} from 'app/services/auth/auth.service';
import {ApiRequestsService} from 'app/services/api-requests/api-requests.service';
import {City} from '../../../../../app/models/city';
import {User} from '../../../../../app/models/user';

@Component({
    selector: 'app-profile-parameters-page-city-form',
    templateUrl: './profile-parameters-page-city-form.component.html',
    styleUrls: ['./profile-parameters-page-city-form.component.css']
})
export class ProfileParametersPageCityFormComponent implements OnInit {

    cities: City[];

    city: City;

    constructor(
        private httpService: ApiRequestsService,
        private authService: AuthService
    ) {
    }

    ngOnInit(): void {
        const user: User = this.authService.getUser();
        this.httpService.getCities(user)
            .subscribe((cities) => (this.cities = cities));
    }

    handleSubmit(): void {
      const user: User = this.authService.getUser();
      this.httpService.postCity(user, this.city)
          .subscribe(success => {
            alert('Action fait avec succes' + JSON.stringify(success));
          }, error => {
            alert('Erreur :' + JSON.stringify(error))
          })
    }

}
