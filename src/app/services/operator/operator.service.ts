import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../../core/constants/api';
import { Operator } from '../../shared/models/operator/operator';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Operator[]>(Api.OPERATORS_URL);
  }

}
