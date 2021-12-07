import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../../core/constants/api';
import { Publihser } from '../../shared/models/publisher/publihser';

@Injectable({
  providedIn: 'root'
})
export class PublihserService {

  constructor(private http: HttpClient) { }

  // GET ALL PUBLISHERS
  getAll(): Observable<any> {
    return this.http.get<Publihser[]>(Api.PUBLISHERS_URL);
  }

  // ADD NEW PUBLISHER
  create(publisher: Publihser): Observable<Publihser> {
    return this.http.post<Publihser>(Api.PUBLISHERS_URL, publisher);
  }

  // UPDATE EXISTING PUBLISHER
  update(id: number, publisher: Publihser): Observable<Object> {
    return this.http.put<Publihser>(`${Api.PUBLISHERS_URL}/${id}`, publisher);
  }

  // DELETE PUBLISHER
  delete(publisher: Publihser): Observable<Publihser> {
    return this.http.delete<Publihser>(`${Api.PUBLISHERS_URL}/${publisher.id}`);
  }

  // GET PUBLIHSER BY ID
  getById(id: number): Observable<any> {
    return this.http.get<Publihser[]>(`${Api.PUBLISHERS_URL}/${id}`);
  }

}
