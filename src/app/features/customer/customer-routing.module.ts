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
        redirectTo: 'customers'
      },
      {
        path: 'customers',
        component: CustomerListComponent,
        data: {
          title: 'customers'
        }
      },
      {
        path: 'customer-create',
        component: CustomerCreateComponent,
        data: {
          title: 'customer-create'
        }
      },
      {
        path: 'customer-update',
        component: CustomerUpdateComponent,
        data: {
          title: 'customer-update'
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
