import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthorRoutingModule } from './author-routing.module';
import { NgModuleModule } from '../../modules/ng-module/ng-module.module';

import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorUpdateComponent } from './author-update/author-update.component';


@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorCreateComponent,
    AuthorUpdateComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgModuleModule
  ]
})
export class AuthorModule { }
