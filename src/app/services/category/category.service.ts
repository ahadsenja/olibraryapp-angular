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

  getAll(): Observable<any> {
    return this.http.get<Category[]>(Api.CATEGORIES_URL);
  }
}
