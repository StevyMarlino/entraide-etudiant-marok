import {Component, OnInit} from '@angular/core';
import {ApiRequestsService} from '../../../../app/services/api/api-requests.service';
import {UserBrowserSessionService} from '../../../../app/services/user-browser-session.service';
import {UserModel} from '../../../../app/models/user.model';
import {UsersApiService} from '../../../../app/services/api/users-api.service';

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
        private usersApi: UsersApiService
    ) {
    }

    ngOnInit() {
        this.usersApi.getAll().subscribe((users: any) => {
            this.users = users;
        })
    }

}
