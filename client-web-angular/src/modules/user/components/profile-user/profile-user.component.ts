import {Component, OnInit} from '@angular/core';
import {UserBrowserSessionService} from 'app/services/user-browser-session.service';
import {UserModel} from '../../../../app/models/user.model';
import {UsersApiService} from '../../../../app/services/api/users-api.service';
import {ApiErrorHandlerService} from '../../../../app/services/api-error-handler.service';
import {LoaderService} from '../../../../app/services/loader.service';
import {NotificationService} from '../../../../app/services/notification.service';

@Component({
    selector: 'app-profile-user',
    templateUrl: './profile-user.component.html',
    styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

    formData: UserModel;
    user: UserModel;

    constructor(
        private userSession: UserBrowserSessionService,
        private usersApi: UsersApiService,
        private apiErrorHandler: ApiErrorHandlerService,
        private loaderService: LoaderService,
        private notificationService: NotificationService
    ) {
    }

    ngOnInit(): void {
        const user = this.userSession.getUser();
        this.formData = user;
        this.user = user;
        this.userSession.getUserObserver().subscribe((data: any) => {
            this.formData = data;
            this.user = data;
        });
    }

    handleAvatarSelected(event): void {
        this.formData.avatar = <File>event.target.files[0];
    }

    handleCoverSelected(event): void {
        this.formData.cover = <File>event.target.files[0];
    }

    handleSubmit(): void {
        this.loaderService.hideLoader();
        this.usersApi.update(this.user.id, this.formData).subscribe((data: any) => {
            this.userSession.setUser(data);
        }, (error: any) => {
            this.apiErrorHandler.handleFromResponse(error)
        }, () => {
            this.loaderService.hideLoader();
            this.notificationService.setNotification([
                'Informations mises à jour avec succès '
            ])
        })
    }

}
