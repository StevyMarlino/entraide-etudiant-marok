import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../models/user.model';

@Component({
  selector: 'app-profile-parameters-page-user-form',
  templateUrl: './profile-parameters-page-user-form.component.html',
  styleUrls: ['./profile-parameters-page-user-form.component.css']
})
export class ProfileParametersPageUserFormComponent implements OnInit {

  userData: UserModel;

  constructor() { }

  ngOnInit(): void {

  }

}
