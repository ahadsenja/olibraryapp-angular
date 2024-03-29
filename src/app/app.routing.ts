import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from './core/guard/auth.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'books',
        loadChildren: () => import('./features/book/book.module').then(m => m.BookModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'categories',
        loadChildren: () => import('./features/category/category.module').then(m => m.CategoryModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'genres',
        loadChildren: () => import('./features/genre/genre.module').then(m => m.GenreModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'authors',
        loadChildren: () => import('./features/author/author.module').then(m => m.AuthorModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'publishers',
        loadChildren: () => import('./features/publisher/publisher.module').then(m => m.PublisherModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'borrows',
        loadChildren: () => import('./features/borrow/borrow.module').then(m => m.BorrowModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'bookreturns',
        loadChildren: () => import('./features/bookreturn/bookreturn.module').then(m => m.BookreturnModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'customers',
        loadChildren: () => import('./features/customer/customer.module').then(m => m.CustomerModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'operators',
        loadChildren: () => import('./features/operator/operator.module').then(m => m.OperatorModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        loadChildren: () => import('./features/setting/setting.module').then(m => m.SettingModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'transaction-details',
        loadChildren: () => import('./components/transaction-details/transaction-details.module').then(m => m.TransactionDetailsModule),
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
