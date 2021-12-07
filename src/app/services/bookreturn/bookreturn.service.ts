import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Api } from '../../core/constants/api';
import { Bookreturn } from '../../shared/models/bookreturn/bookreturn';

@Injectable({
  providedIn: 'root'
})
export class BookreturnService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Bookreturn[]>(Api.BOOKRETURNS_URL);
  }

}
