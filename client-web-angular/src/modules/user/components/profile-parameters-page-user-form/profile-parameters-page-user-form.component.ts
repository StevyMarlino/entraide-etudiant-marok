import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { WebRequestService } from 'app/services/web-request/web-request.service';
import {UserModel} from '../../../../app/models/user.model';

@Component({
  selector: 'app-profile-parameters-page-user-form',
  templateUrl: './profile-parameters-page-user-form.component.html',
  styleUrls: ['./profile-parameters-page-user-form.component.css']
})
export class ProfileParametersPageUserFormComponent implements OnInit {

  formData: UserModel;

  constructor(
    private httpService: WebRequestService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.formData = this.authService.getUser();
  }

}
