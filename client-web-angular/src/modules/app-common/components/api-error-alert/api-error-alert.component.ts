import {Component, OnInit} from '@angular/core';
import {ApiErrorResponseModel} from '../../../../app/models/api-error-response.model';
import {ApiErrorHandlerService} from '../../../../app/services/api-error-handler.service';

@Component({
    selector: 'app-http-errors',
    templateUrl: './api-error-alert.component.html',
    styleUrls: ['./api-error-alert.component.css']
})
export class ApiErrorAlertComponent implements OnInit {

    errorResponse: ApiErrorResponseModel;

    errors = [];

    constructor(
        private httpErrorsService: ApiErrorHandlerService
    ) {
        this.errorResponse = this.httpErrorsService.errorResponse
    }

    ngOnInit(): void {
        this.httpErrorsService
            .toggleErrorObserver()
            .subscribe(errorResponse => {
                this.errors = [];
                for (const key in errorResponse.errors) {
                    errorResponse.errors[key].forEach(element => {
                        this.errors.push(element)
                    });
                }
                this.errorResponse = errorResponse;
            })
    }

}
