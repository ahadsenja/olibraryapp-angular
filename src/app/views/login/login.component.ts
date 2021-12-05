import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { TokenStorageService } from '../../core/auth/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  isLoggedIn = false;
  userInfo: string[] = [];

  constructor(
    private authService: AuthService,
    private token: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.token.getToken() !== null) {
      this.isLoggedIn = true;
    }
  }

  onSubmit() {
    const { email, password } = this;

    if (email !== '' && password !== '') {
      this.authService.login(email, password).subscribe(data => {
        this.isLoggedIn = true;
        this.token.saveToken(data.token);
        this.router.navigate(['/dashboard/dashboard']);
      })
    }
  }

}
