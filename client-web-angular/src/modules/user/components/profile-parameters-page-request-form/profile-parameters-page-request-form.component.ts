import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { WebRequestService } from 'app/services/web-request/web-request.service';
import {UserRequestModel} from '../../../../app/models/user-request.model';

@Component({
  selector: 'app-profile-parameters-page-request-form',
  templateUrl: './profile-parameters-page-request-form.component.html',
  styleUrls: ['./profile-parameters-page-request-form.component.css']
})
export class ProfileParametersPageRequestFormComponent implements OnInit {

  formData: UserRequestModel;

  constructor(
    private httpService: WebRequestService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
