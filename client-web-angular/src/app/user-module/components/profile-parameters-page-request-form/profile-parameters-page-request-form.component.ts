import { Component, OnInit } from '@angular/core';
import {UserRequestModel} from '../../../models/user-request.model';

@Component({
  selector: 'app-profile-parameters-page-request-form',
  templateUrl: './profile-parameters-page-request-form.component.html',
  styleUrls: ['./profile-parameters-page-request-form.component.css']
})
export class ProfileParametersPageRequestFormComponent implements OnInit {

  formData: UserRequestModel;

  constructor() { }

  ngOnInit(): void {
  }

}
