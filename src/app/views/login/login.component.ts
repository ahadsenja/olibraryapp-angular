import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

import { AuthService } from '../../core/auth/auth.service';
import { TokenStorageService } from '../../core/auth/token-storage.service';

import { Api } from '../../core/constants/api';

declare const FB: any;

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
    FB.init({
      appId: '1065788820633925',
      status: true,
      cookie: true,
      xfbml: true,
      version: 'v4.0'
    });
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
        this.router.navigate(['/dashboard/dashboard']);
      })
    }
  }

  doLoginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userData) => {
        this.googleToRestApi(userData.idToken);
      });
  }

  googleToRestApi(idToken: string): void {
    this.http.post(Api.GOOGLE_AUTH_URL, { idToken }).subscribe(onSuccess => {
      this.token.saveToken(onSuccess['token']);
      this.router.navigate(['/dashboard/dashboard']);
    }, onFail => {
      console.log('On Fail: ', onFail);
    })
  }

  // doLoginWithFacebook() {
  //   FB.login((response) => {
  //     if (response.status === 'connected') {
  //       console.log('response: ', response);
  //     } else {
  //       console.log('Login failed');
  //     }
  //   }, { scope: 'public_profile, email' })
  // }

  // doLoginWithGithub(): void {
  //   this.authService.githubGetAuthPage().subscribe(result => {
  //     console.log('result: ', result);
  //     console.log('ini testing github route dari angular');
  //   })
  // }
}