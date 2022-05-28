import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../../components/search-filter/search-filter.pipe';

import { BookRoutingModule } from './book-routing.module';

import { BookListComponent } from './book-list/book-list.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookUpdateComponent } from './book-update/book-update.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookCreateComponent,
    BookUpdateComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // Ng2SearchPipeModule
  ]
})
export class BookModule { }
