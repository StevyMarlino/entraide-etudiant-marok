import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../app/services/auth/auth.service';
import {WebRequestService} from '../../../app/services/web-request/web-request.service';

@Component({
  selector: 'app-administration-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

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
      if (user.role !== 'admin') {
        this.router.navigate(['/utilisateur/profil'])
      }
    }
  }

}
