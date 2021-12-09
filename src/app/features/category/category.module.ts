import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoryRoutingModule } from './category-routing.module';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
