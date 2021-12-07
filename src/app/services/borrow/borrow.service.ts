import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../../core/constants/api';
import { Borrow } from '../../shared/models/borrow/borrow';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Borrow[]>(Api.BORROWS_URL);
  }

}
