import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BorrowRoutingModule } from './borrow-routing.module';
import { NgModuleModule } from '../../modules/ng-module/ng-module.module';

import { BorrowListComponent } from './borrow-list/borrow-list.component';
import { BorrowCreateComponent } from './borrow-create/borrow-create.component';
import { BorrowUpdateComponent } from './borrow-update/borrow-update.component';


@NgModule({
  declarations: [
    BorrowListComponent,
    BorrowCreateComponent,
    BorrowUpdateComponent
  ],
  imports: [
    CommonModule,
    BorrowRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgModuleModule
  ]
})
export class BorrowModule { }
