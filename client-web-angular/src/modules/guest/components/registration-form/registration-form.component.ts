import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoaderService} from '../../../../app/services/loader/loader.service';
import {User} from 'app/models/user';
import {ApiRequestsService} from '../../../../app/services/api-requests/api-requests.service';
import {ApiErrorAlertService} from '../../../../app/services/api-error-alert/api-error-alert.service';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

    user: User = new User();

    constructor(
        private router: Router,
        public loader: LoaderService,
        private request: ApiRequestsService,
        private auth: AuthService,
        private httpErrorsService: ApiErrorAlertService) {
    }

    ngOnInit(): void {
    }

    handleSubmit() {
        this.loader.showLoader();
        this.request.register(this.user)
            .subscribe(successResponse => {
                this.auth.setData(successResponse);
                this.router.navigate(['/utilisateur/profil']).then(() => {
                    this.loader.hideLoader()
                })
            }, errorResponse => {
                this.loader.hideLoader();
                this.httpErrorsService.toggleError(errorResponse.error);
            })
    }

}
