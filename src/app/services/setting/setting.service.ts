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

  // GET ALL SETTINGS
  getAll(): Observable<any> {
    return this.http.get<Setting[]>(Api.SETTINGS_URL);
  }

  // ADD NEW SETTING
  create(setting: Setting): Observable<Setting> {
    return this.http.post<Setting>(Api.SETTINGS_URL, setting);
  }

  // UPDATE EXISTING SETTING
  update(id: number, setting: Setting): Observable<Object> {
    return this.http.put<Setting>(`${Api.SETTINGS_URL}/${id}`, setting);
  }

  // DELETE SETTING
  delete(setting: Setting): Observable<Setting> {
    return this.http.delete<Setting>(`${Api.SETTINGS_URL}/${setting.id}`);
  }

  // GET SETTING BY ID
  getById(id: number): Observable<any> {
    return this.http.get<Setting[]>(`${Api.SETTINGS_URL}/${id}`);
  }

}
