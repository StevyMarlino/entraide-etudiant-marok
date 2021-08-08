import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-and-signup',
    templateUrl: './login-and-signup.component.html',
    styleUrls: ['./login-and-signup.component.css']
})
export class LoginAndSignupComponent implements OnInit {

    errorMessages: string[] = [];

    constructor(
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    onLoginButtonClicked(email: string, password: string) {
        this.router.navigate(['/admin/dashboard'])
    }


    onRegistrationButtonClicked(lastName: string,
                                familyName: string,
                                bornAt: string,
                                gender: string,
                                userName: string,
                                email: string,
                                phone: string,
                                password: string,
                                confirmationPassword: string) {
        this.router.navigate(['/utilisateur/profil'])

    }
}
