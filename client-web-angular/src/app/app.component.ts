import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import {LoaderService} from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

     constructor(
         public location: Location,
         private Loader: LoaderService
     ) {}

    ngOnInit() {
    }

    isMap(path: any) {
      const title: any = this.location
                           .prepareExternalUrl(this.location.path())
                           .slice( 1 );
      return path !== title;
    }
}
