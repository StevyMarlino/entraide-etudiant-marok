import {Component, OnInit} from '@angular/core';
import {Request} from '../../../../app/models/request';
import {ApiRequestsService} from '../../../../app/services/api-requests/api-requests.service';
import {AuthService} from '../../../../app/services/auth/auth.service';
import {LoaderService} from '../../../../app/services/loader/loader.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}


@Component({
    selector: 'app-requests-management',
    templateUrl: './requests-management.component.html',
    styleUrls: ['./requests-management.component.css']
})
export class RequestsManagementComponent implements OnInit {

    public tableData1: TableData;
    public tableData2: TableData;
    public requests: Request[];

    constructor(
        private httpService: ApiRequestsService,
        private authService: AuthService,
        private loaderService: LoaderService
    ) {
    }

    ngOnInit() {
        const user = this.authService.getUser();
        this.httpService.getRequests(user).subscribe(success => {
            this.requests = success.requests
        }, error => {
            alert('erreur' + JSON.stringify(error));
        });
    }
}
