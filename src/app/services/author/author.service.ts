import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Api } from '../../core/constants/api';
import { Author } from '../../shared/models/author/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  // GET ALL AUTHORS
  getAll(): Observable<any> {
    return this.http.get<Author[]>(Api.AUTHORS_URL);
  }

  // ADD NEW AUTHOR
  create(author: Author): Observable<Author> {
    return this.http.post<Author>(Api.AUTHORS_URL, author);
  }

  // UPDATE EXISTING AUTHOR
  update(id: number, author: Author): Observable<Object> {
    return this.http.put<Author>(`${Api.AUTHORS_URL}/${id}`, author);
  }

  // DELETE AUTHOR
  delete(author: Author): Observable<Author> {
    return this.http.delete<Author>(`${Api.AUTHORS_URL}/${author.id}`);
  }

  // GET AUTHOR BY ID
  getById(id: number): Observable<any> {
    return this.http.get<Author[]>(`${Api.AUTHORS_URL}/${id}`);
  }

}
