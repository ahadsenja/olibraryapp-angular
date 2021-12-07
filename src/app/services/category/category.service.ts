import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Api } from '../../core/constants/api';
import { Category } from '../../shared/models/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  // GET ALL CATEGORIES
  getAll(): Observable<any> {
    return this.http.get<Category[]>(Api.CATEGORIES_URL);
  }

  // ADD NEW CATEGORY
  create(category: Category): Observable<Category> {
    return this.http.post<Category>(Api.CATEGORIES_URL, category);
  }

  // UPDATE EXISTING CATEGORY
  update(id: number, category: Category): Observable<Object> {
    return this.http.put<Category>(`${Api.CATEGORIES_URL}/${id}`, category);
  }

  // DELETE CATEGORY
  delete(category: Category): Observable<Category> {
    return this.http.delete<Category>(`${Api.CATEGORIES_URL}/${category.id}`);
  }

  // GET CATEGORY BY ID
  getById(id: number): Observable<any> {
    return this.http.get<Category[]>(`${Api.CATEGORIES_URL}/${id}`);
  }

}
