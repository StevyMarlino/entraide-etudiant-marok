import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoaderService} from '../../../services/loader/loader.service';
import {UserModel} from '../../../models/user.model';
import {WebRequestService} from '../../../services/web-request/web-request.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    user: UserModel = new UserModel();

    constructor(
        private router: Router,
        private loader: LoaderService,
        private request: WebRequestService
    ) {
    }


    ngOnInit(): void {
    }

    handleSubmit() {
        this.loader.showLoader();
        this.request.login(this.user)
            .subscribe((response) => {
                this.loader.hideLoader()
            })
    }
}
