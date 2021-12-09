import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChargeCreateComponent } from './charge-create/charge-create.component';
import { ChargeListComponent } from './charge-list/charge-list.component';
import { ChargeUpdateComponent } from './charge-update/charge-update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Charges'
    },
    children: [
      {
        path: '',
        redirectTo: 'charges',
        pathMatch: 'full'
      },
      {
        path: 'charges',
        component: ChargeListComponent,
        data: {
          title: 'Charges'
        }
      },
      {
        path: 'charge-create',
        component: ChargeCreateComponent,
        data: {
          title: 'Create New Charge Data'
        }
      },
      {
        path: 'charge-update/:id',
        component: ChargeUpdateComponent,
        data: {
          title: 'Update Selected Charge Data'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChargeRoutingModule { }
