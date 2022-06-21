import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Api } from '../../core/constants/api';
import { Borrow } from '../../shared/models/borrow/borrow';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  constructor(private http: HttpClient) { }

  // GET ALL BORROWS
  getAll(): Observable<any> {
    return this.http.get<Borrow[]>(Api.BORROWS_URL);
  }

  // ADD NEW BORROW
  create(borrow: Borrow): Observable<Borrow> {
    return this.http.post<Borrow>(Api.BORROWS_URL, borrow);
  }

  // UPDATE EXISTING BORROW
  update(id: number, borrow: Borrow): Observable<Object> {
    return this.http.put<Borrow>(`${Api.BORROWS_URL}/${id}`, borrow);
  }

  // DELETE BORROW
  delete(borrow: Borrow): Observable<Borrow> {
    return this.http.delete<Borrow>(`${Api.BORROWS_URL}/${borrow.id}`);
  }

  // GET BORROW BY ID
  getById(id: number): Observable<any> {
    return this.http.get<Borrow[]>(`${Api.BORROWS_URL}/${id}`);
  }

  getBorrowedBookByCustomerId(id: number): Observable<any> {
    return this.http.get<Borrow[]>(`${Api.BORROWED_BOOK_BY_CUSTOMER}/${id}`);
  }

}
