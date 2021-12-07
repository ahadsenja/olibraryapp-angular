import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChargeRoutingModule } from './charge-routing.module';

import { ChargeListComponent } from './charge-list/charge-list.component';
import { ChargeCreateComponent } from './charge-create/charge-create.component';
import { ChargeUpdateComponent } from './charge-update/charge-update.component';


@NgModule({
  declarations: [
    ChargeListComponent,
    ChargeCreateComponent,
    ChargeUpdateComponent

  ],
  imports: [
    CommonModule,
    ChargeRoutingModule
  ]
})
export class ChargeModule { }
