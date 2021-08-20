import {Component, OnInit} from '@angular/core';
import {RequestModel} from '../../../../app/models/request.model';

@Component({
    selector: 'app-profile-request',
    templateUrl: './profile-request.component.html',
    styleUrls: ['./profile-request.component.css']
})
export class ProfileRequestComponent implements OnInit {

    formData: RequestModel = new RequestModel();

    constructor() {
    }

    ngOnInit(): void {
    }

    handleSubmit(): void {

    }

}
