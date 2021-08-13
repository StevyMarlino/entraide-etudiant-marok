import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import {UserModel} from '../../../models/user.model';

@Component({
  selector: 'app-profile-parameters-page-info-card',
  templateUrl: './profile-parameters-page-info-card.component.html',
  styleUrls: ['./profile-parameters-page-info-card.component.css']
})
export class ProfileParametersPageInfoCardComponent implements OnInit {

  user: UserModel;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.auth.getUser();
    console.log(this.user)
  }

}
