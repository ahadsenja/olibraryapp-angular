import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookreturnRoutingModule } from './bookreturn-routing.module';

import { BookreturnListComponent } from './bookreturn-list/bookreturn-list.component';
import { BookreturnCreateComponent } from './bookreturn-create/bookreturn-create.component';
import { BookreturnUpdateComponent } from './bookreturn-update/bookreturn-update.component';


@NgModule({
  declarations: [
    BookreturnListComponent,
    BookreturnCreateComponent,
    BookreturnUpdateComponent
  ],
  imports: [
    CommonModule,
    BookreturnRoutingModule
  ]
})
export class BookreturnModule { }
