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

  getAll(): Observable<any> {
    return this.http.get<Publihser[]>(Api.PUBLISHERS_URL);
  }

}
