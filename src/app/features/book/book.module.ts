import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { BookRoutingModule } from './book-routing.module';
import { NgModuleModule } from '../../modules/ng-module/ng-module.module';

import { BookListComponent } from './book-list/book-list.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookUpdateComponent } from './book-update/book-update.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookCreateComponent,
    BookUpdateComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgModuleModule
  ]
})
export class BookModule { }
