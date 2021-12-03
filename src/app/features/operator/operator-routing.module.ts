import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorCreateComponent } from './operator-create/operator-create.component';
import { OperatorListComponent } from './operator-list/operator-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Operators'
    },
    children: [
      {
        path: '',
        redirectTo: 'operators'
      },
      {
        path: 'operators',
        component: OperatorListComponent,
        data: {
          title: 'operators'
        }
      },
      {
        path: 'operator-create',
        component: OperatorCreateComponent,
        data: {
          title: 'operator-create'
        }
      },
      {
        path: 'operator-update',
        component: OperatorCreateComponent,
        data: {
          title: 'operator-update'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorRoutingModule { }
