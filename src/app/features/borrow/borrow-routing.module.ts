import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BorrowCreateComponent } from './borrow-create/borrow-create.component';
import { BorrowListComponent } from './borrow-list/borrow-list.component';
import { BorrowUpdateComponent } from './borrow-update/borrow-update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Borrows'
    },
    children: [
      {
        path: '',
        redirectTo: 'borrows',
        pathMatch: 'full'
      },
      {
        path: 'borrows',
        component: BorrowListComponent,
        data: {
          title: 'Borrows'
        }
      },
      {
        path: 'borrow-create',
        component: BorrowCreateComponent,
        data: {
          title: 'Create New Borrow Data'
        }
      },
      {
        path: 'borrow-update/:id',
        component: BorrowUpdateComponent,
        data: {
          title: 'Update Selected Borrow'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowRoutingModule { }
