import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/actualite', title: 'Actualité',  icon: 'pe-7s-news-paper', class: '' },
    { path: '/tableau-de-bord', title: 'Tableau-de-board',  icon: 'fa fa-dashboard', class: '' },
    { path: '/connexion', title: 'Compte',  icon: 'fa fa-user', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './guest-sidebar.component.html'
})
export class GuestSidebarComponent implements OnInit {
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
