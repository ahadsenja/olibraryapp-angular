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

  login(email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(Api.LOGIN_URL, { email, password }, httpOptions);
  }

  loginWithGoogle(accessToken: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(Api.GOOGLE_AUTH_URL, { accessToken }, httpOptions);
  }

  githubGetAuthPage(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(Api.GITHUB_AUTH_URL, httpOptions);
  }

  facebookGetAuthPage(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(Api.FACEBOOK_AUTH_URL, httpOptions);
  }

}
