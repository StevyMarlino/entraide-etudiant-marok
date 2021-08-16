import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { ApiRequestsService } from 'app/services/api-requests/api-requests.service';
import {User} from '../../../../../app/models/user';

@Component({
  selector: 'app-profile-parameters-page-user-form',
  templateUrl: './profile-parameters-page-user-form.component.html',
  styleUrls: ['./profile-parameters-page-user-form.component.css']
})
export class ProfileParametersPageUserFormComponent implements OnInit {

  formData: User;

  constructor(
    private httpService: ApiRequestsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.formData = this.authService.getUser();
  }

  handleSubmit(): void {
    const user: User = this.authService.getUser();
    this.httpService.postUser(this.formData)
        .subscribe(success => {
          alert('Action fait avec succes' + JSON.stringify(success));
        }, error => {
          alert('Erreur :' + JSON.stringify(error))
        })
  }

}
