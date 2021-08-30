import {Component, OnInit} from '@angular/core';
import {RequestModel} from '../../../../app/models/request.model';
import {ApiRequestsService} from '../../../../app/services/api/api-requests.service';
import {UserBrowserSessionService} from '../../../../app/services/user-browser-session.service';
import {LoaderService} from '../../../../app/services/loader.service';
import {RequestsApiService} from '../../../../app/services/api/requests-api.service';

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
    public requests: RequestModel[];

    constructor(
        private httpService: ApiRequestsService,
        private userSession: UserBrowserSessionService,
        private requestApi: RequestsApiService
    ) {
    }

    ngOnInit() {
        this.requestApi.getAll().subscribe((requests: any) => {
            this.requests = requests
        });
    }
}
