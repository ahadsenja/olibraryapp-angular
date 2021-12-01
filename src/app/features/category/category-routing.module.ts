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
        redirectTo: 'categories'
      },
      {
        path: 'categories',
        component: CategoryListComponent,
        data: {
          title: 'categories'
        }
      },
      {
        path: 'category-create',
        component: CategoryCreateComponent,
        data: {
          title: 'category-create'
        }
      },
      {
        path: 'category-update',
        component: CategoryUpdateComponent,
        data: {
          title: 'category-update'
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
