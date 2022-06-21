import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublisherRoutingModule } from './publisher-routing.module';
import { NgModuleModule } from '../../modules/ng-module/ng-module.module';

import { PublisherListComponent } from './publisher-list/publisher-list.component';
import { PublisherCreateComponent } from './publisher-create/publisher-create.component';
import { PublisherUpdateComponent } from './publisher-update/publisher-update.component';


@NgModule({
  declarations: [
    PublisherListComponent,
    PublisherCreateComponent,
    PublisherUpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PublisherRoutingModule,
    NgModuleModule,
    FormsModule
  ]
})
export class PublisherModule { }
