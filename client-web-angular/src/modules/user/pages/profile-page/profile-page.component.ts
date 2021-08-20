import { Component, OnInit } from '@angular/core';
import { UserBrowserSessionService } from 'app/services/user-browser-session.service';
import { ApiRequestsService } from 'app/services/api/api-requests.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  constructor(
    private browserSessionService: UserBrowserSessionService,
    private httpService: ApiRequestsService
  ) { }

  ngOnInit(): void {
  }

}
