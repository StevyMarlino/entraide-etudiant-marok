import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    private notificationMessages: Subject<string[]> = new Subject<string[]>();

    constructor() {
    }

    public setNotification(messages: string[]) {
      this.notificationMessages.next();
      this.notificationMessages.next(messages);
    }

    public notifications(): Observable<string[]> {
        return this.notificationMessages.asObservable();
    }
}
