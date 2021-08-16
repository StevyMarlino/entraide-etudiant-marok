import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { ApiRequestsService } from 'app/services/api-requests/api-requests.service';
import {School} from '../../../../../app/models/school';
import {User} from '../../../../../app/models/user';

@Component({
  selector: 'app-profile-parameters-page-school-form',
  templateUrl: './profile-parameters-page-school-form.component.html',
  styleUrls: ['./profile-parameters-page-school-form.component.css']
})
export class ProfileParametersPageSchoolFormComponent implements OnInit {

  schools: School[];

  formSchool: School;

  constructor(
    private httpService: ApiRequestsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    const user: User = this.authService.getUser();
    this.httpService.postSchool(user, this.formSchool)
        .subscribe(success => {
          alert('Action fait avec succes' + JSON.stringify(success));
        }, error => {
          alert('Erreur :' + JSON.stringify(error))
        })
  }

}
