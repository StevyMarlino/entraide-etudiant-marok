import { Component, OnInit } from '@angular/core';
import { UserModel } from 'app/models/user.model';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-profile-parametters-page',
  templateUrl: './profile-parameters-page.component.html',
  styleUrls: ['./profile-parameters-page.component.css']
})
export class ProfileParametersPageComponent implements OnInit {

  user: UserModel;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.auth.getUser();
  }

}
