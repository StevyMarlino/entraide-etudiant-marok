import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserModel} from '../../../../app/models/user.model';
import {UserBrowserSessionService} from 'app/services/user-browser-session.service';
import {ApiErrorHandlerService} from 'app/services/api-error-handler.service';
import {AuthApiService} from '../../../../app/services/api/auth-api.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    user: UserModel = new UserModel();

    constructor(
        private router: Router,
        private request: AuthApiService,
        private userSession: UserBrowserSessionService,
        private apiErrorAlert: ApiErrorHandlerService
    ) {
    }

    ngOnInit(): void {
    }

    handleSubmit() {
        this.request.login(this.user).subscribe(user => {
            this.userSession.setUser(user);
            if (user.role === 'admin') {
                this.router.navigate(['/admin/utilisateurs'])
            }
            if (user.role === 'etudiant') {
                this.router.navigate(['/utilisateur/profil'])
            }
        }, error => {
            this.apiErrorAlert.handleFromResponse(error)
        })
    }
}
