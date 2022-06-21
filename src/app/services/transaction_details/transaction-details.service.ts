import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Api } from '../../core/constants/api';
import { Borrow } from '../../shared/models/borrow/borrow';

@Injectable({
  providedIn: 'root'
})
export class TransactionDetailsService {

  constructor(private http: HttpClient) { }

  updateBorrowChargeStatus(id: number, borrow: Borrow): Observable<Object> {
    return this.http.put<Borrow>(`${Api.BORROWS_URL}/${id}`, borrow);
  }
}
