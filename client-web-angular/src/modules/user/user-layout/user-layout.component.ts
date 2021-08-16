import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../app/services/auth/auth.service';
import {ApiRequestsService} from '../../../app/services/api-requests/api-requests.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private webRequestService: ApiRequestsService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

}
