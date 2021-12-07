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

  // GET ALL BOOK RETURNS
  getAll(): Observable<any> {
    return this.http.get<Bookreturn[]>(Api.BOOKRETURNS_URL);
  }

  // ADD NEW BOOK RETURN
  create(bookreturn: Bookreturn): Observable<Bookreturn> {
    return this.http.post<Bookreturn>(Api.BOOKRETURNS_URL, bookreturn);
  }

  // UPDATE EXISTING BOOK RETURN
  update(id: number, bookreturn: Bookreturn): Observable<Object> {
    return this.http.put<Bookreturn>(`${Api.BOOKRETURNS_URL}/${id}`, bookreturn);
  }

  // DELETE BOOK RETURN
  delete(bookreturn: Bookreturn): Observable<Bookreturn> {
    return this.http.delete<Bookreturn>(`${Api.BOOKRETURNS_URL}/${bookreturn.id}`);
  }

  // GET BOOK RETURN BY ID
  getById(id: number): Observable<any> {
    return this.http.get<Bookreturn[]>(`${Api.BOOKRETURNS_URL}/${id}`);
  }

}
