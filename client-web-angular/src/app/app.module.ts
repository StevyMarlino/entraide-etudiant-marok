import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {AppCommonModule} from '../modules/app-common/app-common.module';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        AppCommonModule,

    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})


export class AppModule {
}
