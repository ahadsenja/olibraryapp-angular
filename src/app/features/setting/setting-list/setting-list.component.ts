import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingService } from '../../../services/setting/setting.service';
import { Setting } from '../../../shared/models/setting/setting';

@Component({
  selector: 'app-setting-list',
  templateUrl: './setting-list.component.html',
  styleUrls: ['./setting-list.component.scss']
})
export class SettingListComponent implements OnInit {

  settings: Setting[] = [];

  constructor(
    private settingService: SettingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetSettings();
  }

  onGetSettings(): void {
    this.settingService.getAll().subscribe(data => {
      this.settings = data.data;
    });
  }

  onSelectSetting(id: number) {
    this.router.navigate(['/settings/setting-update', id]);
  }

  onDeleteSetting(setting: Setting) {
    this.settingService.delete(setting).subscribe(res => {
      this.settings = this.settings.filter(id => id !== setting);
      alert('WARNING! \n The data you choose will be deleted.');
    });
  }

}
