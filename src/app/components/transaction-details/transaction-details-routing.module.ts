import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionDetailsComponent } from './transaction-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User Transaction Details'
    },
    children: [
      {
        path: '',
        redirectTo: 'transaction-details',
        pathMatch: 'full'
      },
      {
        path: 'transaction-details/:id',
        component: TransactionDetailsComponent,
        data: {
          title: 'User Transaction Details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionDetailsRoutingModule { }
