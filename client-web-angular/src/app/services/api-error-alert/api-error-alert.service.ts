import { Injectable } from '@angular/core';
import { ApiErrorResponse } from '../../models/api-error-response';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiErrorAlertService {

  private subject = new Subject<any>();

  public errorResponse: ApiErrorResponse = {
    message: undefined,
    errors: []
  };

  onToggleError(): Observable<any> {
    return this.subject.asObservable();
  }

  toggleError(value: ApiErrorResponse): void {
    this.errorResponse = value;
    this.subject.next(this.errorResponse);
  }

  constructor() { }
}
