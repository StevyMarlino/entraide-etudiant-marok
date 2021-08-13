import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../app/services/auth/auth.service';
import {WebRequestService} from '../../../app/services/web-request/web-request.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private webRequestService: WebRequestService,
      private router: Router
  ) { }

  ngOnInit(): void {
    const user = this.authService.getUser()
    if ( user === undefined || user.id === undefined ) {
      this.router.navigate(['/connexion'])
      return;
    }
    if ( user !== undefined || user.id !== undefined ) {
      if (user.role === 'admin') {
        this.router.navigate(['/admin/utilisateurs'])
      }
    }
  }

}
