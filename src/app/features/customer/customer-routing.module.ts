import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Customers'
    },
    children: [
      {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full'
      },
      {
        path: 'customers',
        component: CustomerListComponent,
        data: {
          title: 'Customers'
        }
      },
      {
        path: 'customer-create',
        component: CustomerCreateComponent,
        data: {
          title: 'Create New Customer'
        }
      },
      {
        path: 'customer-update/:id',
        component: CustomerUpdateComponent,
        data: {
          title: 'Update Selected Customer'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
