import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../../services/setting/setting.service';
import { Setting } from '../../../shared/models/setting/setting';

@Component({
  selector: 'app-setting-list',
  templateUrl: './setting-list.component.html',
  styleUrls: ['./setting-list.component.scss']
})
export class SettingListComponent implements OnInit {

  settings: Setting[] = [];

  constructor(private settingService: SettingService) { }

  ngOnInit(): void {
    this.onGetSettings();
  }

  onGetSettings(): void {
    this.settingService.getAll().subscribe(data => {
      this.settings = data.data;
      console.log(this.settings);
    })
  }

}
