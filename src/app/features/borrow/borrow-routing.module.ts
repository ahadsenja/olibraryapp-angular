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
        redirectTo: 'borrows'
      },
      {
        path: 'borrows',
        component: BorrowListComponent,
        data: {
          title: 'borrows'
        }
      },
      {
        path: 'borrow-create',
        component: BorrowCreateComponent,
        data: {
          title: 'borrow-create'
        }
      },
      {
        path: 'borrow-update',
        component: BorrowUpdateComponent,
        data: {
          title: 'borrow-update'
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
