import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../app/services/auth/auth.service';
import {ApiRequestsService} from '../../../app/services/api-requests/api-requests.service';

@Component({
  selector: 'app-administration-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private webRequestService: ApiRequestsService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

}
