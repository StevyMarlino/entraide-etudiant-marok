import {Component, OnInit} from '@angular/core';
import {ApiRequestsService} from '../../../../app/services/api/api-requests.service';
import {UserBrowserSessionService} from '../../../../app/services/user-browser-session.service';
import {UserModel} from '../../../../app/models/user.model';
import {UsersApiResourceService} from "../../../../app/services/api/users-api-resource.service";

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}


@Component({
    selector: 'app-user-management',
    templateUrl: './user-management.component.html',
    styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

    public tableData1: TableData;
    public tableData2: TableData;
    public users: UserModel[] = [];

    constructor(
        private httpService: ApiRequestsService,
        private userSession: UserBrowserSessionService,
        private usersApi: UsersApiResourceService
    ) {
    }

    ngOnInit() {
        const user = this.userSession.user;
        this.usersApi.getAll().subscribe(users => {
            this.users = users;
        })
    }

}
