import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../../app/models/user.model';
import {UserBrowserSessionService} from '../../../../app/services/user-browser-session.service';

@Component({
    selector: 'app-profile-info',
    templateUrl: './profile-info.component.html',
    styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

    user: UserModel = new UserModel();

    constructor(private userSession: UserBrowserSessionService) {
    }

    ngOnInit(): void {
        this.user = this.userSession.getUser();
        this.userSession.getUserObserver().subscribe((data: any) => {
            this.user = data;
        })
    }

}
