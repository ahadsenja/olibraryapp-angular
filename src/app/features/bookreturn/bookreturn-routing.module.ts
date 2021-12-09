import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookreturnCreateComponent } from './bookreturn-create/bookreturn-create.component';
import { BookreturnListComponent } from './bookreturn-list/bookreturn-list.component';
import { BookreturnUpdateComponent } from './bookreturn-update/bookreturn-update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Book Returns'
    },
    children: [
      {
        path: '',
        redirectTo: 'bookreturns',
        pathMatch: 'full'
      },
      {
        path: 'bookreturns',
        component: BookreturnListComponent,
        data: {
          title: 'Book Returns'
        }
      },
      {
        path: 'bookreturn-create',
        component: BookreturnCreateComponent,
        data: {
          title: 'Create New Book Return Data'
        }
      },
      {
        path: 'bookreturn-update/:id',
        component: BookreturnUpdateComponent,
        data: {
          title: 'Update Selected Return'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookreturnRoutingModule { }
