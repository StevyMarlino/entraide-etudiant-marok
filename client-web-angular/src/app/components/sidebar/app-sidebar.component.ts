import { Component, OnInit } from '@angular/core';
import {RouteInfo} from '../../models/app.model';
import {DataService} from "../../services/data.service";



@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html'
})
export class AppSidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.menuItems = this.dataService.ROUTES().filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
