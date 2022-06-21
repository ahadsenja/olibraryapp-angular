import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { CoreModule } from './core/core.module';

import { AuthorModule } from './features/author/author.module';
import { BookModule } from './features/book/book.module';
import { BookreturnModule } from './features/bookreturn/bookreturn.module';
import { BorrowModule } from './features/borrow/borrow.module';
import { CategoryModule } from './features/category/category.module';
import { CustomerModule } from './features/customer/customer.module';
import { GenreModule } from './features/genre/genre.module';
import { OperatorModule } from './features/operator/operator.module';
import { PublisherModule } from './features/publisher/publisher.module';
import { SettingModule } from './features/setting/setting.module';
import { ProfileModule } from './features/profile/profile.module';
import { TransactionDetailsModule } from './components/transaction-details/transaction-details.module';

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { AuthGuard } from './core/guard/auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),

    SocialLoginModule,

    CoreModule,

    AuthorModule,
    BookModule,
    BookreturnModule,
    BorrowModule,
    CategoryModule,
    CustomerModule,
    GenreModule,
    OperatorModule,
    PublisherModule,
    SettingModule,
    ProfileModule,
    TransactionDetailsModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ModalComponent,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, // keep user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('558315854775-eqp8ftvt254beg3cc22r7b0oc7451hk5.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig
    },
    AuthGuard,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
