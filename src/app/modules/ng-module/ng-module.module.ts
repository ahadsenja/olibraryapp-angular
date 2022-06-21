import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchFilterPipe } from '../../components/search-filter/search-filter.pipe';
import { JwPaginationComponent } from 'jw-angular-pagination';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    SearchFilterPipe,
    JwPaginationComponent
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule
  ],
  exports: [
    SearchFilterPipe,
    Ng2SearchPipeModule,
    JwPaginationComponent
  ],
})
export class NgModuleModule { }
