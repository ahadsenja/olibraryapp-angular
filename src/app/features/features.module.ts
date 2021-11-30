import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { PublisherListComponent } from './publisher/publisher-list/publisher-list.component';
import { PublisherCreateComponent } from './publisher/publisher-create/publisher-create.component';
import { PublisherUpdateComponent } from './publisher/publisher-update/publisher-update.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';


@NgModule({
  declarations: [
    PublisherListComponent,
    PublisherCreateComponent,
    PublisherUpdateComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
