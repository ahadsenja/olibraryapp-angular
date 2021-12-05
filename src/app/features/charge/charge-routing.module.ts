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
          title: 'charges'
        }
      },
      {
        path: 'charge-create',
        component: ChargeCreateComponent,
        data: {
          title: 'charge-create'
        }
      },
      {
        path: 'charge-update',
        component: ChargeUpdateComponent,
        data: {
          title: 'charge-update'
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
