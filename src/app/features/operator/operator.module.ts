import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OperatorRoutingModule } from './operator-routing.module';

import { OperatorListComponent } from './operator-list/operator-list.component';
import { OperatorCreateComponent } from './operator-create/operator-create.component';
import { OperatorUpdateComponent } from './operator-update/operator-update.component';


@NgModule({
  declarations: [
    OperatorListComponent,
    OperatorCreateComponent,
    OperatorUpdateComponent
  ],
  imports: [
    CommonModule,
    OperatorRoutingModule,
    ReactiveFormsModule
  ]
})
export class OperatorModule { }
