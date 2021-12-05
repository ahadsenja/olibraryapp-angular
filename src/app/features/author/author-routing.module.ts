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
          title: 'authors'
        }
      },
      {
        path: 'author-create',
        component: AuthorCreateComponent,
        data: {
          title: 'author-create'
        }
      },
      {
        path: 'author-update',
        component: AuthorUpdateComponent,
        data: {
          title: 'author-update'
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
