import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Api } from '../../core/constants/api';
import { Charge } from '../../shared/models/charge/charge';

@Injectable({
  providedIn: 'root'
})
export class ChargeService {

  constructor(private http: HttpClient) { }

  // GET ALL CHARGES
  getAll(): Observable<any> {
    return this.http.get<Charge[]>(Api.CHARGES_URL);
  }

  // ADD NEW CHARGE
  create(charge: Charge): Observable<Charge> {
    return this.http.post<Charge>(Api.CHARGES_URL, charge);
  }

  // UPDATE EXISTING CHARGE
  update(id: number, charge: Charge): Observable<Object> {
    return this.http.put<Charge>(`${Api.CHARGES_URL}/${id}`, charge);
  }

  // DELETE CHARGE
  delete(charge: Charge): Observable<Charge> {
    return this.http.delete<Charge>(`${Api.CHARGES_URL}/${charge.id}`);
  }

  // GET CHARGE BY ID
  getById(id: number): Observable<any> {
    return this.http.get<Charge[]>(`${Api.CHARGES_URL}/${id}`);
  }

}
