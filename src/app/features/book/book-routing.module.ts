import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookUpdateComponent } from './book-update/book-update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Books'
    },
    children: [
      {
        path: '',
        redirectTo: 'books'
      },
      {
        path: 'books',
        component: BookListComponent,
        data: {
          title: 'books'
        }
      },
      {
        path: 'book-create',
        component: BookCreateComponent,
        data: {
          title: 'book-create'
        }
      },
      {
        path: 'book-update',
        component: BookUpdateComponent,
        data: {
          title: 'book-update'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
