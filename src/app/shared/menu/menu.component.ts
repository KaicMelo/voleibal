import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent {
  constructor(private router: Router) {}
  players() {
    this.router.navigate(['players']);
  }

  board() {
    this.router.navigate(['']);
  }

  settings() {
    this.router.navigate(['settings']);
  }

  teamConfiguration() {
    this.router.navigate(['team-configuration']);
  }
}
