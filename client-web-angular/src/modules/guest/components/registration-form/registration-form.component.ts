import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoaderService} from '../../../../app/services/loader/loader.service';
import {FormGroup} from '@angular/forms';
import {UserModel} from 'app/models/user.model';
import {WebRequestService} from '../../../../app/services/web-request/web-request.service';
import {HttpErrorsService} from '../../../../app/services/http-errors/http-errors.service';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent implements OnInit {

    loginForm: FormGroup;

    user: UserModel = new UserModel();

    formErrors = [];

    constructor(
        private router: Router,
        public loader: LoaderService,
        private request: WebRequestService,
        private auth: AuthService,
        private httpErrorsService: HttpErrorsService) {
    }

    ngOnInit(): void {
    }

    handleSubmit() {
        this.loader.showLoader();
        this.request.register(this.user)
            .subscribe(successResponse => {
                this.auth.setData(successResponse)
                this.router.navigate(['/utilisateur/profil']).then(() => {
                    this.loader.hideLoader()
                })
            }, errorResponse => {
                this.httpErrorsService.toggleError(errorResponse.error);
            })
    }

}
