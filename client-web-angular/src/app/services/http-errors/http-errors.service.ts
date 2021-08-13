import { Injectable } from '@angular/core';
import { ErrorResponse } from '../../interfaces/error-response';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorsService {

  private subject = new Subject<any>();

  public errorResponse: ErrorResponse = {
    message: undefined,
    errors: []
  };

  onToggleError(): Observable<any> {
    return this.subject.asObservable();
  }

  toggleError(value: ErrorResponse): void {
    this.errorResponse = value;
    this.subject.next(this.errorResponse);
  }

  constructor() { }
}
