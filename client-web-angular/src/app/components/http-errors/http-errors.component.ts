import { Component, OnInit } from '@angular/core';
import {ErrorResponse} from '../../interfaces/error-response';
import {HttpErrorsService} from '../../services/http-errors/http-errors.service';

@Component({
  selector: 'app-http-errors',
  templateUrl: './http-errors.component.html',
  styleUrls: ['./http-errors.component.css']
})
export class HttpErrorsComponent implements OnInit {

  errorResponse: ErrorResponse ;

  errors = [];

  constructor(private httpErrorsService: HttpErrorsService) {
    this.errorResponse = this.httpErrorsService.errorResponse
  }

  ngOnInit(): void {
   this.httpErrorsService.onToggleError()
   .subscribe(errorResponse => {
     this.errorResponse = errorResponse
     this.errors = [];
     for (const key in this.errorResponse.errors) {
       if (Object.prototype.hasOwnProperty.call(this.errorResponse.errors, key)) {
         const error = this.errorResponse.errors[key];
         this.errors.push(error)
       }
     }
     console.log(errorResponse.errors)
   })
  }

}
