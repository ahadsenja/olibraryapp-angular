import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../../core/constants/api';
import { Customer } from '../../shared/models/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  // GET ALL CUSTOMERS
  getAll(): Observable<any> {
    return this.http.get<Customer[]>(Api.CUSTOMERS_URL);
  }

  // ADD NEW CUSTOMER
  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(Api.CUSTOMERS_URL, customer);
  }

  // UPDATE EXISTING CUSTOMER
  update(id: number, customer: Customer): Observable<Object> {
    return this.http.put<Customer>(`${Api.CUSTOMERS_URL}/${id}`, customer);
  }

  // DELETE CUSTOMER
  delete(customer: Customer): Observable<Customer> {
    return this.http.delete<Customer>(`${Api.CUSTOMERS_URL}/${customer.id}`);
  }

  // GET CUSTOMER BY ID
  getById(id: number): Observable<any> {
    return this.http.get<Customer[]>(`${Api.CUSTOMERS_URL}/${id}`);
  }

}
