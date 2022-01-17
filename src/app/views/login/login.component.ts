import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

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

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private token: TokenStorageService,
    private socialAuthService: SocialAuthService,
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

  doLoginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userData) => {
        this.sendToRestApiMethod(userData.idToken);
        console.log('User Data: ', userData);
      });
  }

  sendToRestApiMethod(token: string): void {
    this.http.post(Api.GOOGLE_AUTH, { token }).subscribe(onSuccess => {
      this.token.saveToken(onSuccess['token']);
      this.router.navigate(['/dashboard/dashboard']);
      console.log('On Success: ', onSuccess);
    }, onFail => {
      console.log('On Fail: ', onFail);
    })
  }

}
