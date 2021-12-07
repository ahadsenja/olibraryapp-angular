import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublisherCreateComponent } from './publisher-create/publisher-create.component';
import { PublisherListComponent } from './publisher-list/publisher-list.component';
import { PublisherUpdateComponent } from './publisher-update/publisher-update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Publishers'
    },
    children: [
      {
        path: '',
        redirectTo: 'publishers',
        pathMatch: 'full'
      },
      {
        path: 'publishers',
        component: PublisherListComponent,
        data: {
          title: 'publishers'
        }
      },
      {
        path: 'publisher-create',
        component: PublisherCreateComponent,
        data: {
          title: 'publisher-create'
        }
      },
      {
        path: 'publisher-update/:id',
        component: PublisherUpdateComponent,
        data: {
          title: 'publisher-update'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublisherRoutingModule { }
