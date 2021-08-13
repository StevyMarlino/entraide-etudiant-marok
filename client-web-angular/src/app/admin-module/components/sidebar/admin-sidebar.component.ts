import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'fa fa-dashboard', class: '' },
    // { path: '/admin/requetes', title: 'Requetes',  icon: 'pe-7s-user', class: '' },
    { path: '/admin/utilisateurs', title: 'Etudiants',  icon: 'fa fa-users', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './admin-sidebar.component.html'
})
export class AdminSidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
