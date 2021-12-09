import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OperatorCreateComponent } from './operator-create/operator-create.component';
import { OperatorListComponent } from './operator-list/operator-list.component';
import { OperatorUpdateComponent } from './operator-update/operator-update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Operators'
    },
    children: [
      {
        path: '',
        redirectTo: 'operators',
        pathMatch: 'full'
      },
      {
        path: 'operators',
        component: OperatorListComponent,
        data: {
          title: 'Operators'
        }
      },
      {
        path: 'operator-create',
        component: OperatorCreateComponent,
        data: {
          title: 'Create New Operator'
        }
      },
      {
        path: 'operator-update/:id',
        component: OperatorUpdateComponent,
        data: {
          title: 'Update Selected Operator'
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
