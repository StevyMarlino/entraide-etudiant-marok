import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {LoaderService} from '../../../../app/services/loader/loader.service';
import {User} from '../../../../app/models/user';
import {ApiRequestsService} from '../../../../app/services/api-requests/api-requests.service';
import {AuthService} from 'app/services/auth/auth.service';
import {ApiErrorAlertService} from 'app/services/api-error-alert/api-error-alert.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    user: User = new User();

    constructor(
        private router: Router,
        private loader: LoaderService,
        private request: ApiRequestsService,
        private auth: AuthService,
        private httpErrorsService: ApiErrorAlertService
    ) {
    }

    ngOnInit(): void {
    }

    handleSubmit() {
        this.loader.showLoader();
        this.request
            .login(this.user)
            .subscribe(successResponse => {
                this.auth.setData(successResponse);
                if (successResponse.user.role === 'admin') {
                    this.router
                        .navigate(['/utilisateur/profil'])
                        .then(() => {
                            this.loader.hideLoader()
                        })
                }
                if (successResponse.user.role === 'etudiant') {
                    this.router
                        .navigate(['/administrateur/utilisateurs'])
                        .then(() => {
                            this.loader.hideLoader()
                        })
                }
            }, errorResponse => {
                this.loader.hideLoader();
                this.httpErrorsService.toggleError(errorResponse.error);
            })
    }
}
