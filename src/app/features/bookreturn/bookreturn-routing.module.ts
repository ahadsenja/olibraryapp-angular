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
          title: 'bookreturns'
        }
      },
      {
        path: 'bookreturn-create',
        component: BookreturnCreateComponent,
        data: {
          title: 'bookreturn-create'
        }
      },
      {
        path: 'bookreturn-update',
        component: BookreturnUpdateComponent,
        data: {
          title: 'bookreturn-update'
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
