import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { WebRequestService } from 'app/services/web-request/web-request.service';
import {UserSchoolModel} from '../../../../app/models/user-school.model';

@Component({
  selector: 'app-profile-parameters-page-school-form',
  templateUrl: './profile-parameters-page-school-form.component.html',
  styleUrls: ['./profile-parameters-page-school-form.component.css']
})
export class ProfileParametersPageSchoolFormComponent implements OnInit {

  schools: UserSchoolModel[];

  formSchool: UserSchoolModel;

  constructor(
    private httpService: WebRequestService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
