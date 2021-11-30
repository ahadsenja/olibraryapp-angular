import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { PublisherListComponent } from './publisher/publisher-list/publisher-list.component';
import { PublisherCreateComponent } from './publisher/publisher-create/publisher-create.component';
import { PublisherUpdateComponent } from './publisher/publisher-update/publisher-update.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';
import { GenreListComponent } from './genre/genre-list/genre-list.component';
import { GenreCreateComponent } from './genre/genre-create/genre-create.component';
import { GenreUpdateComponent } from './genre/genre-update/genre-update.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookUpdateComponent } from './book/book-update/book-update.component';


@NgModule({
  declarations: [
    PublisherListComponent,
    PublisherCreateComponent,
    PublisherUpdateComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
    GenreListComponent,
    GenreCreateComponent,
    GenreUpdateComponent,
    BookListComponent,
    BookCreateComponent,
    BookUpdateComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
