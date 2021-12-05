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

  getAll(): Observable<any> {
    return this.http.get<Genre[]>(Api.GENRES_URL);
  }

}
