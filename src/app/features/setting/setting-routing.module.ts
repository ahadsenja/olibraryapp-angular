import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingCreateComponent } from './setting-create/setting-create.component';
import { SettingListComponent } from './setting-list/setting-list.component';
import { SettingUpdateComponent } from './setting-update/setting-update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Settings'
    },
    children: [
      {
        path: '',
        redirectTo: 'settings',
        pathMatch: 'full'
      },
      {
        path: 'settings',
        component: SettingListComponent,
        data: {
          title: 'Settings'
        }
      },
      {
        path: 'setting-create',
        component: SettingCreateComponent,
        data: {
          title: 'Create New Setting'
        }
      },
      {
        path: 'setting-update/:id',
        component: SettingUpdateComponent,
        data: {
          title: 'Update Existing Setting'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
