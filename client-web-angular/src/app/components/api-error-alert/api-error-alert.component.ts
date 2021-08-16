import {Component, OnInit} from '@angular/core';
import {ApiErrorResponse} from '../../models/api-error-response';
import {ApiErrorAlertService} from '../../services/api-error-alert/api-error-alert.service';

@Component({
    selector: 'app-http-errors',
    templateUrl: './api-error-alert.component.html',
    styleUrls: ['./api-error-alert.component.css']
})
export class ApiErrorAlertComponent implements OnInit {

    errorResponse: ApiErrorResponse;

    errors = [];

    constructor(
        private httpErrorsService: ApiErrorAlertService
    ) {
        this.errorResponse = this.httpErrorsService.errorResponse
    }

    ngOnInit(): void {
        this.httpErrorsService
            .onToggleError()
            .subscribe(errorResponse => {
                for (const key in errorResponse.errors) {
                    errorResponse.errors[key].forEach(element => {
                        this.errors.push(element)
                    });
                }
                this.errorResponse = errorResponse;
            })
    }

}
