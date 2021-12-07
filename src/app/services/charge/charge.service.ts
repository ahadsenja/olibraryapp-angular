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

  getAll(): Observable<any> {
    return this.http.get<Charge[]>(Api.CHARGES_URL);
  }

}
