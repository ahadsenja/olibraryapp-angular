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
        redirectTo: 'settings'
      },
      {
        path: 'settings',
        component: SettingListComponent,
        data: {
          title: 'settings'
        }
      },
      {
        path: 'setting-create',
        component: SettingCreateComponent,
        data: {
          title: 'setting-create'
        }
      },
      {
        path: 'setting-update',
        component: SettingUpdateComponent,
        data: {
          title: 'setting-update'
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
