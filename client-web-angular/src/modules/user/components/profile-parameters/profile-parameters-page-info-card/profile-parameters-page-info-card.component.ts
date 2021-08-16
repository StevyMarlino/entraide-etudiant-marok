import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { ApiRequestsService } from 'app/services/api-requests/api-requests.service';
import {User} from '../../../../../app/models/user';

@Component({
  selector: 'app-profile-parameters-page-info-card',
  templateUrl: './profile-parameters-page-info-card.component.html',
  styleUrls: ['./profile-parameters-page-info-card.component.css']
})
export class ProfileParametersPageInfoCardComponent implements OnInit {

  user: User;

  constructor(
    private httpService: ApiRequestsService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.auth.getUser();
    console.log(this.user)
  }

}
