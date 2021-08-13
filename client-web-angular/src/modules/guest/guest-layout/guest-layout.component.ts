import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../app/services/auth/auth.service';
import {WebRequestService} from '../../../app/services/web-request/web-request.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-guest-layout',
  templateUrl: './guest-layout.component.html',
  styleUrls: ['./guest-layout.component.css']
})
export class GuestLayoutComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private webRequestService: WebRequestService,
      private router: Router
  ) { }

  ngOnInit(): void {
    const user = this.authService.getUser()
    if ( user !== undefined || user.id !== undefined ) {
      if (user.role === 'admin') {
        this.router.navigate(['/admin/utilisateurs'])
      }
      if (user.role === 'student') {
        this.router.navigate(['/utilisateur/profil'])
      }
    }
  }

}
