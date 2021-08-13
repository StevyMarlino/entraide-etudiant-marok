import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/utilisateur/profil', title: 'Profil',  icon: 'pe-7s-user', class: '' },
    // { path: '/utilisateur/requete', title: 'Requêtes',  icon: 'fa fa-dashboard', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './user-sidebar.component.html'
})
export class UserSidebarComponent implements OnInit {
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
