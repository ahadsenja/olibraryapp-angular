import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GenreRoutingModule } from './genre-routing.module';
import { NgModuleModule } from '../../modules/ng-module/ng-module.module';

import { GenreListComponent } from './genre-list/genre-list.component';
import { GenreCreateComponent } from './genre-create/genre-create.component';
import { GenreUpdateComponent } from './genre-update/genre-update.component';


@NgModule({
  declarations: [
    GenreListComponent,
    GenreCreateComponent,
    GenreUpdateComponent
  ],
  imports: [
    CommonModule,
    GenreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgModuleModule
  ]
})
export class GenreModule { }
