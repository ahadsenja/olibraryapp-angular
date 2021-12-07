import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';

import { SettingListComponent } from './setting-list/setting-list.component';
import { SettingCreateComponent } from './setting-create/setting-create.component';
import { SettingUpdateComponent } from './setting-update/setting-update.component';


@NgModule({
  declarations: [
    SettingListComponent,
    SettingCreateComponent,
    SettingUpdateComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
