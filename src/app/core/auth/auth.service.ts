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

  loginWithGoogle(idToken: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(Api.GOOGLE_AUTH_URL, { idToken }, httpOptions);
  }

}
