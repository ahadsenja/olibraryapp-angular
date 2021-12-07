import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Api } from '../../core/constants/api';
import { Book } from '../../shared/models/book/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  // GET ALL BOOKS
  getAll(): Observable<any> {
    return this.http.get<Book[]>(Api.BOOKS_URL);
  }

  // ADD NEW BOOK
  create(book: Book): Observable<Book> {
    return this.http.post<Book>(Api.BOOKS_URL, book);
  }

  // UPDATE EXISTING BOOK
  update(id: number, book: Book): Observable<Object> {
    return this.http.put<Book>(`${Api.BOOKS_URL}/${id}`, book);
  }

  // DELETE BOOK
  delete(book: Book): Observable<Book> {
    return this.http.delete<Book>(`${Api.BOOKS_URL}/${book.id}`);
  }

  // GET BOOK BY ID
  getById(id: number): Observable<any> {
    return this.http.get<Book[]>(`${Api.BOOKS_URL}/${id}`);
  }

}
