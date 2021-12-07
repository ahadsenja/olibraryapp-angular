import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../../core/constants/api';
import { Genre } from '../../shared/models/genre/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  // GET ALL GENRES
  getAll(): Observable<any> {
    return this.http.get<Genre[]>(Api.GENRES_URL);
  }

  // ADD NEW GENRE
  create(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(Api.GENRES_URL, genre);
  }

  // UPDATE EXISTING GENRE
  update(id: number, genre: Genre): Observable<Object> {
    return this.http.put<Genre>(`${Api.GENRES_URL}/${id}`, genre);
  }

  // DELETE GENRE
  delete(genre: Genre): Observable<Genre> {
    return this.http.delete<Genre>(`${Api.GENRES_URL}/${genre.id}`);
  }

  // GET GENRE BY ID
  getById(id: number): Observable<any> {
    return this.http.get<Genre[]>(`${Api.GENRES_URL}/${id}`);
  }

}
