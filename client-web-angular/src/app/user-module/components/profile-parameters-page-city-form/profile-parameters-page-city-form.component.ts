import { Component, OnInit } from '@angular/core';
import {UserCityModel} from '../../../models/user-city.model';

@Component({
  selector: 'app-profile-parameters-page-city-form',
  templateUrl: './profile-parameters-page-city-form.component.html',
  styleUrls: ['./profile-parameters-page-city-form.component.css']
})
export class ProfileParametersPageCityFormComponent implements OnInit {

  userCities: UserCityModel[];

  formData: UserCityModel;

  constructor() { }

  ngOnInit(): void {
  }

}
