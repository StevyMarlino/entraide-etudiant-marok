import { Component, OnInit } from '@angular/core';
import { City } from 'app/models/city';
import { School } from 'app/models/school';
import { User } from 'app/models/user';
import { AuthService } from 'app/services/auth/auth.service';
import { ApiRequestsService } from 'app/services/api-requests/api-requests.service';

@Component({
  selector: 'app-profile-parametters-page',
  templateUrl: './profile-parameters-page.component.html',
  styleUrls: ['./profile-parameters-page.component.css']
})
export class ProfileParametersPageComponent implements OnInit {

  user: User;
  cities: City[];
  schools: School[];

  constructor(
    private auth: AuthService,
    private httpService: ApiRequestsService
  ) { }

  ngOnInit(): void {

  }

}
