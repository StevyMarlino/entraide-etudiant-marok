import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoaderService} from '../../../../app/services/loader.service';
import {UserModel} from 'app/models/user.model';
import {ApiRequestsService} from '../../../../app/services/api/api-requests.service';
import {ApiErrorHandlerService} from '../../../../app/services/api-error-handler.service';
import { UserBrowserSessionService } from 'app/services/user-browser-session.service';
import {ApiAuthenticationService} from '../../../../app/services/api/api-authentication.service';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

    user: UserModel = new UserModel();

    constructor(
        private router: Router,
        private authentication: ApiAuthenticationService,
        private userSession: UserBrowserSessionService,
        private apiErrorHandler: ApiErrorHandlerService) {
    }

    ngOnInit(): void {
    }

    handleSubmit() {
        this.authentication.register(this.user)
            .subscribe(successResponse => {
                this.userSession.user = successResponse;
                this.router.navigate(['/utilisateur/profil'])
            }, this.apiErrorHandler.handleFromResponse)
    }

}
