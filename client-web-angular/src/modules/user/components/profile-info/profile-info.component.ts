import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../../app/models/user.model';

@Component({
    selector: 'app-profile-info',
    templateUrl: './profile-info.component.html',
    styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

    user: UserModel = new UserModel();

    constructor() {
    }

    ngOnInit(): void {
    }

}
