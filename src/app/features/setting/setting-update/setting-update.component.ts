import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingService } from '../../../services/setting/setting.service';
import { Setting } from '../../../shared/models/setting/setting';

@Component({
  selector: 'app-setting-update',
  templateUrl: './setting-update.component.html',
  styleUrls: ['./setting-update.component.scss']
})
export class SettingUpdateComponent implements OnInit {

  formGroup = new FormGroup({
    property: new FormControl(''),
    value: new FormControl('')
  });

  isSubmitted = false;

  setting: Setting = new Setting();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private settingService: SettingService
  ) { }

  ngOnInit(): void {
    // get data from url parameter
    const id = this.activatedRoute.snapshot.params.id;

    // set the data into form
    this.settingService.getById(id).subscribe((res) => {
      this.formGroup = new FormGroup({
        property: new FormControl(res.data.property),
        value: new FormControl(res.data.value)
      });
    });
  }

  onUpdateSetting() {
    this.setting.property = this.formGroup.value.property;
    this.setting.value = this.formGroup.value.value;

    const id = this.activatedRoute.snapshot.params.id;

    this.settingService.update(id, this.setting).subscribe(res => {
      this.isSubmitted = true;
    },
      error => console.log(error)
    );

    this.formGroup.reset();
    this.router.navigate(['/settings/settings']);
  }

  onCancelSubmit(event) {
    event.preventDefault();
    this.router.navigate(['/settings/settings']);
  }

}
