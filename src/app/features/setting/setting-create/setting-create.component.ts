import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { SettingService } from '../../../services/setting/setting.service';
import { Setting } from '../../../shared/models/setting/setting';

@Component({
  selector: 'app-setting-create',
  templateUrl: './setting-create.component.html',
  styleUrls: ['./setting-create.component.scss']
})
export class SettingCreateComponent implements OnInit {

  formGroup = new FormGroup({});
  isSubmitted = false;

  settings: Setting[] = [];
  setting: Setting = new Setting();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private settingService: SettingService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      property: [''],
      value: ['']
    });
  }

  onCreateSetting() {
    this.setting.property = this.formGroup.value.property;
    this.setting.value = this.formGroup.value.value;

    this.settingService.create(this.setting).subscribe(res => {
      this.isSubmitted = true;
    },
      error => console.log(error)
    );

    this.formGroup.reset();
    this.router.navigate(['/settings/settings']);
  }

}
