import {Component, OnInit} from '@angular/core';
import {SchoolModel} from '../../../../app/models/school.model';

@Component({
    selector: 'app-profile-school',
    templateUrl: './profile-school.component.html',
    styleUrls: ['./profile-school.component.css']
})
export class ProfileSchoolComponent implements OnInit {

    schools: SchoolModel[];

    formSchool: SchoolModel = new SchoolModel();

    constructor() {
    }

    ngOnInit(): void {
    }

    handleSubmit(): void {

    }

}
