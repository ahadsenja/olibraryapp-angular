import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

import { TokenStorageService } from '../../core/auth/token-storage.service';
import { ProfileService } from '../../services/profile/profile.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {

  constructor(
    private token: TokenStorageService,
    private router: Router
  ) { }

  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  doLogout() {
    this.token.logout();
    this.router.navigateByUrl[('/login')];
    window.location.reload();
  }
}
