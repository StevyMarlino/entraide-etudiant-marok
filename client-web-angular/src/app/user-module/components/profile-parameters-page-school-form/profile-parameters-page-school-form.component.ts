import { Component, OnInit } from '@angular/core';
import {UserSchoolModel} from '../../../models/user-school.model';

@Component({
  selector: 'app-profile-parameters-page-school-form',
  templateUrl: './profile-parameters-page-school-form.component.html',
  styleUrls: ['./profile-parameters-page-school-form.component.css']
})
export class ProfileParametersPageSchoolFormComponent implements OnInit {

  userSchools: UserSchoolModel[];

  formData: UserSchoolModel;

  constructor() { }

  ngOnInit(): void {
  }

}
