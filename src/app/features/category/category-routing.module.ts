import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Categories'
    },
    children: [
      {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
      },
      {
        path: 'categories',
        component: CategoryListComponent,
        data: {
          title: 'Categories'
        }
      },
      {
        path: 'category-create',
        component: CategoryCreateComponent,
        data: {
          title: 'New Book Category'
        }
      },
      {
        path: 'category-update/:id',
        component: CategoryUpdateComponent,
        data: {
          title: 'Update Selected Category'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
