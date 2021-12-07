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

  // GET ALL OPERATORS
  getAll(): Observable<any> {
    return this.http.get<Operator[]>(Api.OPERATORS_URL);
  }

  // ADD NEW OPERATOR
  create(operator: Operator): Observable<Operator> {
    return this.http.post<Operator>(Api.OPERATORS_URL, operator);
  }

  // UPDATE EXISTING OPERATOR
  update(id: number, operator: Operator): Observable<Object> {
    return this.http.put<Operator>(`${Api.OPERATORS_URL}/${id}`, operator);
  }

  // DELETE OPERATOR
  delete(operator: Operator): Observable<Operator> {
    return this.http.delete<Operator>(`${Api.OPERATORS_URL}/${operator.id}`);
  }

  // GET OPERATOR BY ID
  getById(id: number): Observable<any> {
    return this.http.get<Operator[]>(`${Api.OPERATORS_URL}/${id}`);
  }

}
