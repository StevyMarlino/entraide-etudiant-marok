import { Component, OnInit } from '@angular/core';
import { UserCityModel } from 'app/models/user-city.model';
import { UserSchoolModel } from 'app/models/user-school.model';
import { UserModel } from 'app/models/user.model';
import { AuthService } from 'app/services/auth/auth.service';
import { WebRequestService } from 'app/services/web-request/web-request.service';

@Component({
  selector: 'app-profile-parametters-page',
  templateUrl: './profile-parameters-page.component.html',
  styleUrls: ['./profile-parameters-page.component.css']
})
export class ProfileParametersPageComponent implements OnInit {

  user: UserModel;
  cities: UserCityModel[];
  schools: UserSchoolModel[];

  constructor(
    private auth: AuthService,
    private httpService: WebRequestService
  ) { }

  ngOnInit(): void {

  }

}
