import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorUpdateComponent } from './author-update/author-update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Authors'
    },
    children: [
      {
        path: '',
        redirectTo: 'authors',
        pathMatch: 'full'
      },
      {
        path: 'authors',
        component: AuthorListComponent,
        data: {
          title: 'Authors'
        }
      },
      {
        path: 'author-create',
        component: AuthorCreateComponent,
        data: {
          title: 'Create New Author'
        }
      },
      {
        path: 'author-update/:id',
        component: AuthorUpdateComponent,
        data: {
          title: 'Update Existing Data'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
