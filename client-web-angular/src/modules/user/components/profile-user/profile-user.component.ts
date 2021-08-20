import {Component, OnInit} from '@angular/core';
import {UserBrowserSessionService} from 'app/services/user-browser-session.service';
import {UserModel} from '../../../../app/models/user.model';
import {UsersApiResourceService} from "../../../../app/services/api/users-api-resource.service";
import {ApiErrorHandlerService} from "../../../../app/services/api-error-handler.service";

@Component({
    selector: 'app-profile-user',
    templateUrl: './profile-user.component.html',
    styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

    formData: UserModel;

    constructor(
        private userSession: UserBrowserSessionService,
        private usersApi: UsersApiResourceService,
        private apiErrorHandler: ApiErrorHandlerService
    ) {
    }

    ngOnInit(): void {
        this.formData = this.userSession.user;
    }

    handleSubmit(): void {
        this.usersApi.store(this.formData)
            .subscribe(user => {

            }, this.apiErrorHandler.handleFromResponse)
    }

}
