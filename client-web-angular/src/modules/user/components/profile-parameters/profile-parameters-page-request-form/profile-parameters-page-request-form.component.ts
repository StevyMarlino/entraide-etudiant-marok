import {Component, OnInit} from '@angular/core';
import {AuthService} from 'app/services/auth/auth.service';
import {ApiRequestsService} from 'app/services/api-requests/api-requests.service';
import {Request} from '../../../../../app/models/request';
import {User} from '../../../../../app/models/user';

@Component({
    selector: 'app-profile-parameters-page-request-form',
    templateUrl: './profile-parameters-page-request-form.component.html',
    styleUrls: ['./profile-parameters-page-request-form.component.css']
})
export class ProfileParametersPageRequestFormComponent implements OnInit {

    formData: Request;

    constructor(
        private httpService: ApiRequestsService,
        private authService: AuthService
    ) {
    }

    ngOnInit(): void {
    }

    handleSubmit(): void {
        const user: User = this.authService.getUser();
        this.httpService.postUserRequest(user, this.formData)
            .subscribe(success => {
                alert('Action fait avec succes' + JSON.stringify(success));
            }, error => {
                alert('Erreur :' + JSON.stringify(error))
            })
    }

}
