import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

import { AuthService } from '../../core/auth/auth.service';
import { TokenStorageService } from '../../core/auth/token-storage.service';

import { Api } from '../../core/constants/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  isLoggedIn = false;
  userInfo: string[] = [];

  user: SocialUser;
  loggedIn: boolean;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private token: TokenStorageService,
    private socialAuthService: SocialAuthService,
    private router: Router,
  ) {
  }

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
        this.token.saveUser(data);
        this.router.navigate(['/dashboard/dashboard']);
      })
    }
  }

  doLoginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userData) => {
        this.authService.loginWithGoogle(userData.idToken).subscribe(onSuccess => {
          this.token.saveToken(onSuccess['token']);
          this.token.saveUser(userData);
          this.router.navigate(['/dashboard/dashboard']);
        })
      });
  }

}