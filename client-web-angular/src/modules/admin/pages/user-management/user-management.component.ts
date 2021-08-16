import { Component, OnInit } from '@angular/core';
import {ApiRequestsService} from '../../../../app/services/api-requests/api-requests.service';
import {AuthService} from '../../../../app/services/auth/auth.service';
import {User} from '../../../../app/models/user';
import {LoaderService} from '../../../../app/services/loader/loader.service';

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
  public users: User[] = [];

constructor(
    private httpService: ApiRequestsService,
    private authService: AuthService,
    private loaderService: LoaderService
) { }

ngOnInit() {
    const user = this.authService.getUser();
    this.httpService.getUsers(user).subscribe((successResponse) => {
        this.users = successResponse;
    })
}

}
