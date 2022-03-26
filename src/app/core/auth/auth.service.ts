import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Api } from '../constants/api';
import { TokenStorageService } from '../../core/auth/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService
  ) { }

  // Local authentication
  login(email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(Api.LOGIN_URL, { email, password }, httpOptions);
  }

  // Google authentication
  loginWithGoogle(accessToken: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(Api.GOOGLE_AUTH_URL, { accessToken }, httpOptions);
  }

  // Github authentication
  githubGetAuthPage(): Observable<any> {
    return this.http.get('https://github.com/login/oauth/authorize?client_id=52d790b26ee61d7cc119&scope=repo',
      { headers: { accept: 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  githubGetAccessToken(auth_code: string) {
    return this.http.post(`${Api.GITHUB_AUTH_URL}/${'getAccessToken'}`, { code: auth_code });
  }

  githubGetbUserDetails() {
    return this.http.get(`${Api.GITHUB_AUTH_URL}/${'getUserDetails'}`)
  }

  // Facebook authentication
  loginWithFacebook(accessToken: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(Api.FACEBOOK_AUTH_URL, { accessToken }, httpOptions);
  }

}
