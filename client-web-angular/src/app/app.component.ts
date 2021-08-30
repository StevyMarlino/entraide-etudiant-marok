import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {LoaderService} from './services/loader.service';
import {NotificationService} from './services/notification.service';
import {UserBrowserSessionService} from "./services/user-browser-session.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    notificationMessages: string[] = [];

    constructor(
        public location: Location,
        private Loader: LoaderService,
        private notificationService: NotificationService,
        private userSession: UserBrowserSessionService
    ) {
    }

    ngOnInit() {
        this.notificationService.notifications().subscribe((notifications: string[]) => {
            this.notificationMessages = notifications;
        })
    }

    isMap(path: any) {
        const title: any = this.location
            .prepareExternalUrl(this.location.path())
            .slice(1);
        return path !== title;
    }
}
