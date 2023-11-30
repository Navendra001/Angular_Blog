import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor() {
  }
  refreshPage(event: Event) {
    location.href = 'http://localhost:4200/';
  }
}
