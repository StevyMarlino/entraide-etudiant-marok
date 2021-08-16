import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './guest-footer.component.html',
  styleUrls: ['./guest-footer.component.css']
})
export class GuestFooterComponent implements OnInit {

  test: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
