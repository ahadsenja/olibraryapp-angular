import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionDetailsRoutingModule } from './transaction-details-routing.module';

import { TransactionDetailsComponent } from './transaction-details.component';


@NgModule({
  declarations: [
    TransactionDetailsComponent
  ],
  imports: [
    CommonModule,
    TransactionDetailsRoutingModule
  ]
})
export class TransactionDetailsModule { }
