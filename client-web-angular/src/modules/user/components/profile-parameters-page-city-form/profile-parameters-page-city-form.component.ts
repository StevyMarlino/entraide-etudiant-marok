import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { WebRequestService } from 'app/services/web-request/web-request.service';
import {UserCityModel} from '../../../../app/models/user-city.model';

@Component({
  selector: 'app-profile-parameters-page-city-form',
  templateUrl: './profile-parameters-page-city-form.component.html',
  styleUrls: ['./profile-parameters-page-city-form.component.css']
})
export class ProfileParametersPageCityFormComponent implements OnInit {

  cities: UserCityModel[];

  city: UserCityModel;

  constructor(
    private httpService: WebRequestService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const user =  this.authService.getUser();
    this.httpService.getCities(user)
      .subscribe((cities) => (this.cities = cities));
  }

}
