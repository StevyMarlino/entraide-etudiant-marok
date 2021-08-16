import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../app/services/auth/auth.service';
import {ApiRequestsService} from '../../../app/services/api-requests/api-requests.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-guest-layout',
  templateUrl: './guest-layout.component.html',
  styleUrls: ['./guest-layout.component.css']
})
export class GuestLayoutComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private webRequestService: ApiRequestsService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

}
