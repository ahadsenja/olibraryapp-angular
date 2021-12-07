import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../../core/constants/api';
import { Setting } from '../../shared/models/setting/setting';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Setting[]>(Api.SETTINGS_URL);
  }
}
