import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenreCreateComponent } from './genre-create/genre-create.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { GenreUpdateComponent } from './genre-update/genre-update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Genres'
    },
    children: [
      {
        path: '',
        redirectTo: 'genres',
        pathMatch: 'full'
      },
      {
        path: 'genres',
        component: GenreListComponent,
        data: {
          title: 'genres'
        }
      },
      {
        path: 'genre-create',
        component: GenreCreateComponent,
        data: {
          title: 'Create New Genre'
        }
      },
      {
        path: 'genre-update/:id',
        component: GenreUpdateComponent,
        data: {
          title: 'Update Selected Genre'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreRoutingModule { }
