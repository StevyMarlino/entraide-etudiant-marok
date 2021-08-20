import {Injectable} from '@angular/core';
import {ApiErrorResponseModel} from '../models/api-error-response.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiErrorHandlerService {

    private subject = new Subject<any>();

    public errorResponse: ApiErrorResponseModel = {
        message: undefined,
        errors: []
    };

    onToggleError(): Observable<any> {
        return this.subject.asObservable();
    }

    toggleError(value: ApiErrorResponseModel): void {
        this.subject.next({
            message: undefined,
            errors: []
        });
        this.errorResponse = value;
        this.subject.next(this.errorResponse);
    }

    handleFromResponse(errorResponse) {
        if (errorResponse.error) {
            if (errorResponse.error.email) {
                this.toggleError({
                    message: errorResponse.error.email,
                    errors: []
                })
            } else if (errorResponse.error.message && errorResponse.error.errors) {
                this.toggleError(errorResponse.error);
            }
        }
    }

    hiddenHandle(errorResponse) {
        console.log(errorResponse)
    }


    constructor() {
    }
}
